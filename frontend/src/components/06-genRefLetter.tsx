import {
  Paragraph,
  Document,
  Packer,
  AlignmentType,
  HeadingLevel,
  ImageRun,
  HorizontalPositionAlign,
  HorizontalPositionRelativeFrom,
  VerticalPositionAlign,
  VerticalPositionRelativeFrom,
  Header,
  Footer,
  TextRun,
  UnderlineType,
} from "docx";
import { saveAs } from "file-saver";
import moment from "moment";
import * as fs from "fs";
import { BsSlack } from "react-icons/bs";
//import { render } from "react-dom";

export default function GenRefLetter() {
  /**######################################## */
  const generate = () => {
    const doc = new Document({
      styles: {
        paragraphStyles: [
          {
            id: "whatever",
            name: "whatever",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
              size: 28,
              color: "#000000",
              font: "Calibri",
            },
            paragraph: {
              spacing: {
                before: 120,
                after: 400,
              },
            },
          },
          {
            id: "manySpaceAfter",
            name: "manySpaceAfter",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
              size: 28,
              color: "#000000",
              font: "Calibri",
            },
            paragraph: {
              spacing: {
                before: 120,
                after: 1000,
              },
            },
          },
          {
            id: "underline",
            name: "underline",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
              size: 28,
              color: "#000000",
              font: "Calibri",
              underline: {
                type: UnderlineType.SINGLE,
                color: "000000",
              },
            },
            paragraph: {
              spacing: {
                before: 120,
                after: 120,
              },
            },
          },
          {
            id: "harfoon",
            name: "harfoon",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
              size: 28,
              color: "#000000",
              font: "Calibri",
            },
            paragraph: {
              spacing: {
                before: 120,
                after: 120,
              },
            },
          },
        ],
      },

      sections: [
        {
          children: [
            // new ImageRun({
            //   data: fs.readFileSync("../../public/AppStoreLogo.png"),
            //   transformation: {
            //     width: 200,
            //     height: 200,
            //   },
            // }),
            new Paragraph({
              text: `Date: ${moment(new Date()).format("DD-MM-YYYY")}`,
              alignment: AlignmentType.RIGHT,
              style: "whatever",
              // font: {
              //   name: "Calibri",
              // },
            }),
            new Paragraph({
              text: "To whom it may concern:",
              style: "whatever",
            }),
            new Paragraph({
              text: "Employment Proof",
              alignment: AlignmentType.CENTER,
              style: "underline",
            }),
            new Paragraph({
              text: "This letter is to confirm that [employee] has been employed as [position] at our company The Company since [start date] until [effective date]. We wish her every success in her career pursuit.",
              style: "whatever",
            }),
            new Paragraph({
              text: "If you have any questions or require additional information about [employee alias]'s employment, please contact me at 12345678 .",
              style: "whatever",
            }),
            new Paragraph({
              text: "Sincerely,",
              style: "manySpaceAfter",
            }),
            new Paragraph({
              text: "Amy Chan",
              style: "harfoon",
            }),
            new Paragraph({
              text: "Human Resources Manager",
              style: "harfoon",
            }),
            new Paragraph({
              text: "The Company",
              style: "harfoon",
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "referenceletter.docx");
      console.log("Document created successfully");
    });
  };
  return (
    <div className="App">
      <button onClick={generate}>Generate doc</button>
    </div>
  );
}
