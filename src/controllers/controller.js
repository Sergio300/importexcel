import multer from "multer"
import fs from 'fs-extra'
import excelToJson from "convert-excel-to-json"

const getController = async (req, res) => {
    const connection = await getConnection();
    const result = await connection.query("SELECT")
};

export const method = {
    getController
};

export const importData = async (req, res) => {

    try {

        if (req.file?.filename == null || req.file?.filename == 'undefined') {

            res.status(4000).json("No File")
        }

        else {
            var filePath = 'uploads/' + req.file.filename;

            const excelData = excelToJson({
                sourceFile: filePath,
                header: {
                    rows: 1
                },
                columnToKey: {
                    A: 'User_ID',
                    B: 'User_Name',
                    C: 'Dates',
                    D: 'Punch_In',
                    E: 'Punch_Out'
                }

            });
            fs.remove(filePath)
            res.status(200).json(excelData)   

                var newData = {}
                var i = 0

                excelData.Sheet1.map( function (elem) {
                let data = { User_ID: elem.User_ID, User_Name: elem.User_Name, Dates: elem.Dates, Punch_In: elem.Punch_Inlem, Punch_Out: elem.Punch_Out};
                    newData [i] = data
                    i++;
                });

                console.log(newData[1]);

                /*
                excelData.Sheet1.map((i) => 
                    {   
                        console.log(i)
                    }
                )
                */

        }
    } catch (error) {

        console.error(error.message)

        return res.status(500).json({ message: error.message })
        
    }

}