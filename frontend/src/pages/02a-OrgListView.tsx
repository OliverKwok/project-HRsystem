import { ListViewComponent } from "@syncfusion/ej2-react-lists";

export default function OrgListView() {
  let arts: { [key: string]: string }[] = [
    {
      text: "Audi A4",
      id: "9bdb",
      category: "Audi",
    },
    {
      text: "Audi A5",
      id: "4589",
      category: "Audi",
    },
    {
      text: "BMW 501",
      id: "f849",
      category: "BMW",
    },
    {
      text: "BMW 502",
      id: "7aff",
      category: "BMW",
    },
  ];

  let fields = { groupBy: "category", tooltip: "text" };

  return (
    <ListViewComponent
      id="list"
      dataSource={arts}
      fields={fields}
    ></ListViewComponent>
  );
}
