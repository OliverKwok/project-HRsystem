import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function LeaveSetTable() {

  const [products1, setProducts1] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [products3, setProducts3] = useState([]);
    const [products4, setProducts4] = useState([]);
    const [editingRows, setEditingRows] = useState({});
    const toast = useRef();

    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ];

    const statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];

    const dataTableFuncMap = {
        'products1': setProducts1,
        'products2': setProducts2,
        'products3': setProducts3,
        'products4': setProducts4
    };

   let data: any = [
        {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
        {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
        {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
    ]

    // useEffect(() => {
    //     fetchProductData('products1');
    //     fetchProductData('products2');
    //     fetchProductData('products3');
    //     fetchProductData('products4');
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // const fetchProductData = (productStateKey: any) => {
    //     return dataTableFuncMap[{productStateKey}](data);
    // }

    const isPositiveInteger = (val: any) => {
        let str = String(val);
        str = str.trim();
        if (!str) {
            return false;
        }
        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));
        return n !== Infinity && String(n) === str && n >= 0;
    }

    const getStatusLabel = (status: any) => {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    }

    const onCellEditComplete = (e: any) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue))
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0)
                    rowData[field] = newValue;
                else
                    event.preventDefault();
                break;
        }
    }

    const onRowEditComplete1 = (e: any) => {
        let _products2: any = [...products2];
        let { newData, index } = e;

        _products2[index] = newData;

        setProducts2(_products2);
    }

    const onRowEditComplete2 = (e: any) => {
        let _products3: any = [...products3];
        let { newData, index } = e;

        _products3[index] = newData;

        setProducts3(_products3);
    }

    const onRowEditChange = (e: any) => {
        setEditingRows(e.data);
    }

    // const setActiveRowIndex = (index: any) => {
    //     let _editingRows = { ...editingRows, ...{ [`${products3[index].id}`]: true } };
    //     setEditingRows(_editingRows);
    // }

    const cellEditor = (options: any) => {
        if (options.field === 'price')
            return priceEditor(options);
        else
            return textEditor(options);
    }

    const textEditor = (options: any) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }

    const statusEditor = (options: any) => {
        return (
            <Dropdown value={options.value} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>
                }} />
        );
    }

    const priceEditor = (options: any) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
    }

    const statusBodyTemplate = (rowData: any) => {
        return getStatusLabel(rowData.inventoryStatus);
    }

    const priceBodyTemplate = (rowData: any) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    }


  return (
<>
    <h3>Grade: Director</h3>
   <div className="card p-fluid">
                <h5>Row Editing</h5>
                <DataTable value={products2} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete1} responsiveLayout="scroll">
                    <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>
</>
  )
}