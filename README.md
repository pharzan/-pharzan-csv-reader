## CSV Reader

A CSV reader, with many many features, and ability to work with the largest datasets.

#### Installation:
```
npm install --save csv-reader
```

#### Usage:

The installed package can be imported and a csv file can be loaded as below. 

First import the package:

```
const csvReader = require('@pharzan/csv-reader');

```
After importing the package initiate CSV reader by passing in a config. In the config you need to pass a path a csv file and its settings.

```
const current = await csvReader({
                file: './myCsv.csv',
                hasHeaders: true,
                delimeter: ',',
                endingLineSeperator: '\n'
            })
```

After initiating CSV reader you can use either the .getAllColumns function to retrieve all the columns of the CSV to a variable as an array:

```
            const all = [...current.getAllColumns()]
```

Or you can get a column by number:

```
            const all = [...current.getAllColumn(1)]
```

Or get a column with its name:

```
            const all = [...current.getAllColumn('Column Name')]
```



