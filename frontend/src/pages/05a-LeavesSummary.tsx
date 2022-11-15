import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Calendar } from "primereact/calendar";
// import { MultiSelect } from "primereact/multiselect";
import { Slider } from "primereact/slider";
import "../styles/05a-LeavesSummary.css"
import PopupEditLeavesRecord from "../components/05a-PopupEditLeavesRecord"

export default function LeavesSummary() {
  const [customers, setCustomers] = useState([]);
  // const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    }, 
    "country.name": {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    balance: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
    activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  // const representatives = [
  //   { name: "Amy Elsner", image: "amyelsner.png" },
  //   { name: "Anna Fali", image: "annafali.png" },
  //   { name: "Asiya Javayant", image: "asiyajavayant.png" },
  //   { name: "Bernardo Dominic", image: "bernardodominic.png" },
  //   { name: "Elwin Sharvill", image: "elwinsharvill.png" },
  //   { name: "Ioni Bowcher", image: "ionibowcher.png" },
  //   { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
  //   { name: "Onyama Limba", image: "onyamalimba.png" },
  //   { name: "Stephen Shaw", image: "stephenshaw.png" },
  //   { name: "XuXue Feng", image: "xuxuefeng.png" },
  // ];

  // const statuses = [
  //   "unqualified",
  //   "qualified",
  //   "new",
  //   "negotiation",
  //   "renewal",
  //   "proposal",
  // ];

  let data: any = [
    {
      id: 1000,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 12,
      representative: {
        name: "Ioni Bowcher",
        image: "ionibowcher.png",
      },
      balance: 70663,
    },
    {
      id: 1001,
      name: "Josephine Darakjy",
      country: {
        name: "Egypt",
        code: "eg",
      },
      company: "Chanay, Jeffrey A Esq",
      date: "2019-02-09",
      status: "proposal",
      verified: true,
      activity: 0,
      representative: {
        name: "Amy Elsner",
        image: "amyelsner.png",
      },
      balance: 82429,
    },
    {
      id: 1002,
      name: "Art Venere",
      country: {
        name: "Panama",
        code: "pa",
      },
      company: "Chemel, James L Cpa",
      date: "2017-05-13",
      status: "qualified",
      verified: false,
      activity: 3,
      representative: {
        name: "Asiya Javayant",
        image: "asiyajavayant.png",
      },
      balance: 28334,
    },
    {
      id: 1003,
      name: "Lenna Paprocki",
      country: {
        name: "Slovenia",
        code: "si",
      },
      company: "Feltz Printing Service",
      date: "2020-09-15",
      status: "new",
      verified: false,
      activity: 7,
      representative: {
        name: "Xuxue Feng",
        image: "xuxuefeng.png",
      },
      balance: 88521,
    },
    {
      id: 1004,
      name: "Donette Foller",
      country: {
        name: "South Africa",
        code: "za",
      },
      company: "Printing Dimensions",
      date: "2016-05-20",
      status: "proposal",
      verified: true,
      activity: 6,
      representative: {
        name: "Asiya Javayant",
        image: "asiyajavayant.png",
      },
      balance: 93905,
    },
    {
      id: 1005,
      name: "Simona Morasca",
      country: {
        name: "Egypt",
        code: "eg",
      },
      company: "Chapman, Ross E Esq",
      date: "2018-02-16",
      status: "qualified",
      verified: false,
      activity: 8,
      representative: {
        name: "Ivan Magalhaes",
        image: "ivanmagalhaes.png",
      },
      balance: 50041,
    },
    {
      id: 1006,
      name: "Mitsue Tollner",
      country: {
        name: "Paraguay",
        code: "py",
      },
      company: "Morlong Associates",
      date: "2018-02-19",
      status: "renewal",
      verified: true,
      activity: 9,
      representative: {
        name: "Ivan Magalhaes",
        image: "ivanmagalhaes.png",
      },
      balance: 58706,
    },
    {
      id: 1007,
      name: "Leota Dilliard",
      country: {
        name: "Serbia",
        code: "rs",
      },
      company: "Commercial Press",
      date: "2019-08-13",
      status: "renewal",
      verified: true,
      activity: 0,
      representative: {
        name: "Onyama Limba",
        image: "onyamalimba.png",
      },
      balance: 26640,
    },
    {
      id: 1008,
      name: "Sage Wieser",
      country: {
        name: "Egypt",
        code: "eg",
      },
      company: "Truhlar And Truhlar Attys",
      date: "2018-11-21",
      status: "unqualified",
      verified: true,
      activity: 13,
      representative: {
        name: "Ivan Magalhaes",
        image: "ivanmagalhaes.png",
      },
      balance: 65369,
    },
    {
      id: 1009,
      name: "Kris Marrier",
      country: {
        name: "Mexico",
        code: "mx",
      },
      company: "King, Christopher A Esq",
      date: "2015-07-07",
      status: "proposal",
      verified: false,
      activity: 3,
      representative: {
        name: "Onyama Limba",
        image: "onyamalimba.png",
      },
      balance: 63451,
    },
    {
      id: 1010,
      name: "Minna Amigon",
      country: {
        name: "Romania",
        code: "ro",
      },
      company: "Dorl, James J Esq",
      date: "2018-11-07",
      status: "qualified",
      verified: false,
      activity: 38,
      representative: {
        name: "Anna Fali",
        image: "annafali.png",
      },
      balance: 71169,
    },
    {
      id: 1011,
      name: "Abel Maclead",
      country: {
        name: "Singapore",
        code: "sg",
      },
      company: "Rangoni Of Florence",
      date: "2017-03-11",
      status: "qualified",
      verified: true,
      activity: 87,
      representative: {
        name: "Bernardo Dominic",
        image: "bernardodominic.png",
      },
      balance: 96842,
    },
    {
      id: 1012,
      name: "Kiley Caldarera",
      country: {
        name: "Serbia",
        code: "rs",
      },
      company: "Feiner Bros",
      date: "2015-10-20",
      status: "unqualified",
      verified: false,
      activity: 80,
      representative: {
        name: "Onyama Limba",
        image: "onyamalimba.png",
      },
      balance: 92734,
    },
    {
      id: 1013,
      name: "Graciela Ruta",
      country: {
        name: "Chile",
        code: "cl",
      },
      company: "Buckley Miller & Wright",
      date: "2016-07-25",
      status: "negotiation",
      verified: false,
      activity: 59,
      representative: {
        name: "Amy Elsner",
        image: "amyelsner.png",
      },
      balance: 45250,
    },
    {
      id: 1014,
      name: "Cammy Albares",
      country: {
        name: "Philippines",
        code: "ph",
      },
      company: "Rousseaux, Michael Esq",
      date: "2019-06-25",
      status: "new",
      verified: true,
      activity: 90,
      representative: {
        name: "Asiya Javayant",
        image: "asiyajavayant.png",
      },
      balance: 30236,
    },
    {
      id: 1015,
      name: "Mattie Poquette",
      country: {
        name: "Venezuela",
        code: "ve",
      },
      company: "Century Communications",
      date: "2017-12-12",
      status: "negotiation",
      verified: false,
      activity: 52,
      representative: {
        name: "Anna Fali",
        image: "annafali.png",
      },
      balance: 64533,
    },
  ];

  useEffect(() => {
    setCustomers(data);
    setLoading(false);
  }, []);

  // const getCustomers = (data: any) => {
  //   return [...(data || [])].map((d) => {
  //     d.date = new Date(d.date);
  //     return d;
  //   });
  // };

  // const formatDate = (value: any) => {
  //   return value.toLocaleString("en-US", {
  //     // return value('en-US', {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //   });
  // };

  // const formatCurrency = (value: any) => {
  //   return value.toLocaleString("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   });
  // };

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        {/* <h5 className="m-0">Leaves Summary</h5> */}
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search"
          />
        </span>
      </div>
    );
  };

  // const countryBodyTemplate = (rowData: any) => {
  //   return (
  //     <React.Fragment>
  //       <img
  //         alt="flag"
  //         src="images/flag/flag_placeholder.png"
  //         // onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
  //         className={`flag flag-${rowData.country.code}`}
  //         width={30}
  //       />
  //       <span className="image-text">{rowData.country.name}</span>
  //     </React.Fragment>
  //   );
  // };

  // const representativeBodyTemplate = (rowData: any) => {
  //   const representative = rowData.representative;
  //   return (
  //     <React.Fragment>
  //       <img
  //         alt={representative.name}
  //         src={`images/avatar/${representative.image}`}
  //         // onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
  //         width={32}
  //         style={{ verticalAlign: "middle" }}
  //       />
  //       <span className="image-text">{representative.name}</span>
  //     </React.Fragment>
  //   );
  // };

  // const representativeFilterTemplate = (options: any) => {
  //   return (
  //     <React.Fragment>
  //       <div className="mb-3 font-bold">Agent Picker</div>
  //       <MultiSelect
  //         value={options.value}
  //         options={representatives}
  //         itemTemplate={representativesItemTemplate}
  //         onChange={(e) => options.filterCallback(e.value)}
  //         optionLabel="name"
  //         placeholder="Any"
  //         className="p-column-filter"
  //       />
  //     </React.Fragment>
  //   );
  // };

  // const representativesItemTemplate = (option: any) => {
  //   return (
  //     <div className="p-multiselect-representative-option">
  //       <img
  //         alt={option.name}
  //         src={`images/avatar/${option.image}`}
  //         // onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
  //         width={32}
  //         style={{ verticalAlign: "middle" }}
  //       />
  //       <span className="image-text">{option.name}</span>
  //     </div>
  //   );
  // };

  // const dateBodyTemplate = (rowData: any) => {
  //   return formatDate(rowData.date);
  // };

  // const dateFilterTemplate = (options: any) => {
  //   return (
  //     <Calendar
  //       value={options.value}
  //       onChange={(e) => options.filterCallback(e.value, options.index)}
  //       dateFormat="mm/dd/yy"
  //       placeholder="mm/dd/yyyy"
  //       mask="99/99/9999"
  //     />
  //   );
  // };

  // const balanceBodyTemplate = (rowData: any) => {
  //   return formatCurrency(rowData.balance);
  // };

  // const balanceFilterTemplate = (options: any) => {
  //   return (
  //     <InputNumber
  //       value={options.value}
  //       onChange={(e) => options.filterCallback(e.value, options.index)}
  //       mode="currency"
  //       currency="USD"
  //       locale="en-US"
  //     />
  //   );
  // };

  // const statusBodyTemplate = (rowData: any) => {
  //   return (
  //     <span className={`customer-badge status-${rowData.status}`}>
  //       {rowData.status}
  //     </span>
  //   );
  // };

  // const statusFilterTemplate = (options: any) => {
  //   return (
  //     <Dropdown
  //       value={options.value}
  //       options={statuses}
  //       onChange={(e) => options.filterCallback(e.value, options.index)}
  //       itemTemplate={statusItemTemplate}
  //       placeholder="Select a Status"
  //       className="p-column-filter"
  //       showClear
  //     />
  //   );
  // };

  // const statusItemTemplate = (option: any) => {
  //   return <span className={`customer-badge status-${option}`}>{option}</span>;
  // };



    const displayValueTemplate = (value: any) => {
        return (
            <React.Fragment>
                {value}/<b>14</b>
            </React.Fragment>
        );
    }

  const activityBodyTemplate = (rowData: any) => {
    return (
      <ProgressBar 
      value={rowData.activity} 
      // showValue={true}> 
      displayValueTemplate={displayValueTemplate}></ProgressBar>
    );
  };

  const activityFilterTemplate = (options: any) => {
    return (
      <React.Fragment>
        <Slider
          value={options.value}
          onChange={(e) => options.filterCallback(e.value)}
          range
          className="m-3"
        ></Slider>
        <div className="flex align-items-center justify-content-between px-2">
          <span>{options.value ? options.value[0] : 0}</span>
          <span>{options.value ? options.value[1] : 100}</span>
        </div>
      </React.Fragment>
    );
  };

  // const representativeRowFilterTemplate = (options: any) => {
  //   return (
  //     <MultiSelect
  //       value={options.value}
  //       options={representatives}
  //       itemTemplate={representativesItemTemplate}
  //       onChange={(e) => options.filterApplyCallback(e.value)}
  //       optionLabel="name"
  //       placeholder="Any"
  //       className="p-column-filter"
  //       maxSelectedLabels={1}
  //     />
  //   );
  // };

  // const statusRowFilterTemplate = (options: any) => {
  //   return (
  //     <Dropdown
  //       value={options.value}
  //       options={statuses}
  //       onChange={(e) => options.filterApplyCallback(e.value)}
  //       itemTemplate={statusItemTemplate}
  //       placeholder="Select a Status"
  //       className="p-column-filter"
  //       showClear
  //     />
  //   );
  // };

  // const actionBodyTemplate = () => {
  //   return <Button type="button" icon="pi pi-cog"></Button>;
  // };

  const header = renderHeader();

  return (
    <>
    <div className='leaveSummaryHeader'>
    <h3>Leaves Summary</h3>
    <PopupEditLeavesRecord/>
    </div>
    <div className="datatable-doc-demo">
      <div className="card">
        <DataTable
          value={customers}
          paginator
          className="p-datatable-customers"
          header={header}
          rows={10}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          rowsPerPageOptions={[10, 25, 50]}
          dataKey="id"
          rowHover
          // selection={selectedCustomers}
          // onSelectionChange={(e) => setSelectedCustomers(e.value)}
          filters={filters}
          filterDisplay="menu"
          loading={loading}
          responsiveLayout="scroll"
          globalFilterFields={[
            "name",
            "country.name",
            "representative.name",
            "balance",
            "status",
          ]}
          emptyMessage="No customers found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <Column
            // selectionMode="multiple"
            // selectionAriaLabel="name"
            headerStyle={{ width: "3em" }}
          ></Column>
          <Column
            field="name"
            header="Employee Name"
            sortable
            filter
            filterPlaceholder="Search by name"
            style={{ minWidth: "14rem" }}
          />
          {/* <Column
            field="country.name"
            header="Country"
            sortable
            filterField="country.name"
            style={{ minWidth: "14rem" }}
            body={countryBodyTemplate}
            filter
            filterPlaceholder="Search by country"
          />
          <Column
            header="Agent"
            sortable
            sortField="representative.name"
            filterField="representative"
            showFilterMatchModes={false}
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "14rem" }}
            body={representativeBodyTemplate}
            filter
            filterElement={representativeFilterTemplate}
          />
          <Column
            field="date"
            header="Date"
            sortable
            filterField="date"
            dataType="date"
            style={{ minWidth: "8rem" }}
            body={dateBodyTemplate}
            filter
            filterElement={dateFilterTemplate}
          />
          <Column
            field="balance"
            header="Balance"
            sortable
            dataType="numeric"
            style={{ minWidth: "8rem" }}
            body={balanceBodyTemplate}
            filter
            filterElement={balanceFilterTemplate}
          />
          <Column
            field="status"
            header="Status"
            sortable
            filterMenuStyle={{ width: "14rem" }}
            style={{ minWidth: "10rem" }}
            body={statusBodyTemplate}
            filter
            filterElement={statusFilterTemplate}
          /> */}
          <Column
            field="activity"
            header="AL Leave Balance"
            sortable
            showFilterMatchModes={false}
            style={{ minWidth: "10rem" }}
            body={activityBodyTemplate}
            filter
            filterElement={activityFilterTemplate}
          />
          {/* <Column
            headerStyle={{ width: "4rem", textAlign: "center" }}
            bodyStyle={{ textAlign: "center", overflow: "visible" }}
            body={actionBodyTemplate}
          /> */}
        </DataTable>
      </div>
    </div>
    </>
  );
}
