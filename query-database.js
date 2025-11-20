#!/usr/bin/env node

/**
 * Waste Pricing Database Query Utility
 * 
 * Usage examples:
 *   node query-database.js --region "GTA" --size 20
 *   node query-database.js --provider "York 1"
 *   node query-database.js --model "Flat Rate"
 *   node query-database.js --compare --size 20
 */

const fs = require('fs');
const path = require('path');

// Load database
const dbPath = path.join(__dirname, 'waste-pricing-database.json');
const database = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Query functions
function queryByRegion(region) {
    return database.providers.filter(p => 
        p.region.toLowerCase().includes(region.toLowerCase())
    );
}

function queryByProvider(providerName) {
    return database.providers.filter(p => 
        p.name.toLowerCase().includes(providerName.toLowerCase())
    );
}

function queryByPricingModel(model) {
    return database.providers.filter(p => 
        p.pricingModel.toLowerCase().includes(model.toLowerCase())
    );
}

function queryByBinSize(size) {
    const results = [];
    database.providers.forEach(provider => {
        if (provider.pricing) {
            const sizeKey = `${size}yd`;
            if (provider.pricing[sizeKey]) {
                results.push({
                    provider: provider.name,
                    region: provider.region,
                    pricing: provider.pricing[sizeKey],
                    model: provider.pricingModel,
                    overageFee: provider.overageFee,
                    fuelSurcharge: provider.fuelSurcharge
                });
            }
        }
    });
    return results;
}

function compareByBinSize(size) {
    const results = queryByBinSize(size);
    
    console.log(`\n=== ${size}-Yard Bin Comparison ===\n`);
    
    results.forEach(r => {
        console.log(`${r.provider} (${r.region})`);
        console.log(`  Model: ${r.model}`);
        
        if (typeof r.pricing === 'object') {
            if (r.pricing.basePrice) {
                console.log(`  Base Price: $${r.pricing.basePrice}`);
            }
            if (r.pricing.household) {
                console.log(`  Household: $${r.pricing.household}`);
            }
            if (r.pricing.construction) {
                console.log(`  Construction: $${r.pricing.construction}`);
            }
            if (r.pricing.includedWeight) {
                console.log(`  Included Weight: ${r.pricing.includedWeight}`);
            }
        }
        
        if (r.overageFee) {
            const overageStr = typeof r.overageFee === 'string' ? r.overageFee : `$${r.overageFee}`;
            console.log(`  Overage Fee: ${overageStr}${typeof r.overageFee === 'number' ? '/tonne' : ''}`);
        }
        if (r.fuelSurcharge) {
            console.log(`  Fuel Surcharge: ${r.fuelSurcharge}%`);
        }
        console.log('');
    });
}

function listAllProviders() {
    console.log('\n=== All Providers ===\n');
    database.providers.forEach(p => {
        console.log(`${p.name} - ${p.region} (${p.pricingModel})`);
    });
    console.log(`\nTotal: ${database.providers.length} providers\n`);
}

function getMarketStats() {
    console.log('\n=== Market Statistics ===\n');
    console.log('Average Prices:');
    Object.entries(database.statistics.averagePrices).forEach(([size, regions]) => {
        console.log(`  ${size}:`);
        Object.entries(regions).forEach(([region, price]) => {
            if (region !== 'overall') {
                console.log(`    ${region}: $${price}`);
            }
        });
        console.log(`    Overall: $${regions.overall}`);
    });
    
    console.log(`\nOverage Fees: $${database.statistics.overageFees.range[0]}-$${database.statistics.overageFees.range[1]} ${database.statistics.overageFees.unit}`);
    console.log(`Fuel Surcharges: ${database.statistics.fuelSurcharges.range[0]}-${database.statistics.fuelSurcharges.range[1]}%`);
}

// CLI handling
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`
Waste Pricing Database Query Utility

Usage:
  node query-database.js [options]

Options:
  --region <name>        Query by region (GTA, Niagara, Halifax, Truro)
  --provider <name>      Query by provider name
  --model <name>         Query by pricing model (Flat Rate, Tonnage Cap, etc.)
  --size <number>        Query by bin size (14, 20, 40)
  --compare --size <n>   Compare all providers for a specific bin size
  --list                 List all providers
  --stats                Show market statistics
  --help                 Show this help message

Examples:
  node query-database.js --region "GTA" --size 20
  node query-database.js --provider "York 1"
  node query-database.js --model "Flat Rate"
  node query-database.js --compare --size 20
  node query-database.js --list
  node query-database.js --stats
`);
    process.exit(0);
}

// Execute queries
if (args.includes('--list')) {
    listAllProviders();
} else if (args.includes('--stats')) {
    getMarketStats();
} else if (args.includes('--compare')) {
    const sizeIndex = args.indexOf('--size');
    if (sizeIndex !== -1 && args[sizeIndex + 1]) {
        compareByBinSize(parseInt(args[sizeIndex + 1]));
    } else {
        console.error('Error: --compare requires --size <number>');
        process.exit(1);
    }
} else {
    let results = database.providers;
    
    const regionIndex = args.indexOf('--region');
    if (regionIndex !== -1 && args[regionIndex + 1]) {
        results = queryByRegion(args[regionIndex + 1]);
    }
    
    const providerIndex = args.indexOf('--provider');
    if (providerIndex !== -1 && args[providerIndex + 1]) {
        results = results.filter(p => 
            p.name.toLowerCase().includes(args[providerIndex + 1].toLowerCase())
        );
    }
    
    const modelIndex = args.indexOf('--model');
    if (modelIndex !== -1 && args[modelIndex + 1]) {
        results = results.filter(p => 
            p.pricingModel.toLowerCase().includes(args[modelIndex + 1].toLowerCase())
        );
    }
    
    const sizeIndex = args.indexOf('--size');
    if (sizeIndex !== -1 && args[sizeIndex + 1]) {
        const size = parseInt(args[sizeIndex + 1]);
        results = results.filter(p => {
            if (!p.pricing) return false;
            const sizeKey = `${size}yd`;
            return p.pricing[sizeKey] !== undefined;
        });
    }
    
    // Display results
    if (results.length === 0) {
        console.log('No results found.');
    } else {
        console.log(`\nFound ${results.length} result(s):\n`);
        results.forEach(p => {
            console.log(`${p.name}`);
            console.log(`  Region: ${p.region}`);
            console.log(`  Model: ${p.pricingModel}`);
            if (p.serviceFocus) console.log(`  Focus: ${p.serviceFocus}`);
            if (p.pricing) {
                console.log(`  Pricing:`);
                Object.entries(p.pricing).forEach(([key, value]) => {
                    if (typeof value === 'object' && value !== null) {
                        if (value.basePrice) console.log(`    ${key}: $${value.basePrice}`);
                        if (value.household) console.log(`    ${key} (household): $${value.household}`);
                        if (value.construction) console.log(`    ${key} (construction): $${value.construction}`);
                    }
                });
            }
            console.log('');
        });
    }
}

