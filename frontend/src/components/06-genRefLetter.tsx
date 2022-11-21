import { Paragraph, Document, Packer } from "docx";
import { saveAs } from "file-saver";
//import { render } from "react-dom";

export default function GenRefLetter() {
  /**######################################## */
  const generate = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "hello",
              bullet: {
                level: 0, //How deep you want the bullet to be
              },
            }),
            new Paragraph({
              text: "testing",
              bullet: {
                level: 0,
              },
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };
  return (
    <div className="App">
      <button onClick={generate}>Generate doc</button>
    </div>
  );
}
