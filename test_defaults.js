
import fs from 'fs';
import path from 'path';

const filePath = path.join('c:', 'FormGenerator', 'TravelOrder_LocatorSlip.html');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const departureTimeRegex = /value="08:00"/g;
    const arrivalTimeRegex = /value="17:00"/g;

    const departureTimeMatches = data.match(departureTimeRegex);
    const arrivalTimeMatches = data.match(arrivalTimeRegex);

    if (departureTimeMatches && departureTimeMatches.length === 2 && arrivalTimeMatches && arrivalTimeMatches.length === 2) {
        console.log('Test passed: Default times for departure and arrival are set correctly.');
    } else {
        console.error('Test failed: Default times for departure and arrival are not set correctly.');
    }
});
