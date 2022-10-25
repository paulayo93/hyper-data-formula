import HyperFormula from 'hyperformula';
import {tableData} from './data';

// Create an empty HyperFormula instance.
const hf = HyperFormula.buildEmpty({
    licenseKey: "gpl-v3"
});

const sheetName = hf.addSheet("CostSheet");
const sheetId = hf.getSheetId(sheetName);


hf.setCellContents({
    row: 0,
    col: 0,
    sheet: sheetId
},
tableData
);

export {hf, sheetName, sheetId};


