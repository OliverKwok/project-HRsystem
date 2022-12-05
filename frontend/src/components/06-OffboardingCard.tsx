import "../styles/06-OffboardingCard.css";
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
// import GenRefLetter from "./06-genRefLetter";

export default function OffboardingCard(props: any) {
  // progress bar styling
  const containerStyles: any = {
    height: 30,
    width: "90%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20,
  };

  const fillerStyles: any = {
    height: "100%",
    width: `${props.completed}%`,
    backgroundColor: props.bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles: any = {
    padding: 15,
    color: "white",
    fontWeight: "bold",
  };

  const statusColor: any = {
    backgroundColor: props.barColor,
  };

  // tax button: open another tab
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // generate pdf
  const generate = async () => {
    const doc = new Document({
      styles: {
        paragraphStyles: [
          {
            id: "logo",
            name: "logo",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
              size: 80,
              color: "#24d1ae",
              font: "Serif",
            },
            paragraph: {
              spacing: {
                before: 120,
                after: 100,
              },
            },
          },
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
                after: 180,
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
        // new ImageRun({
        // data: fs.readFileSync("../../public/AppStoreLogo.png"),
        //   transformation: {
        //     width: 200,
        //     height: 200,
        //   },
        // }),

        {
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  text: "THE COMPANY",
                  style: "logo",
                }),
              ],
            }),
          },
          children: [
            new Paragraph({
              text: `Date: ${moment(new Date()).format("DD-MM-YYYY")}`,
              alignment: AlignmentType.RIGHT,
              style: "whatever",
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
              style: "whatever",
              children: [
                new TextRun("This letter is to confirm that "),
                new TextRun({
                  text: `${props.person} `,
                  bold: true,
                }),
                new TextRun("has been employed as "),
                new TextRun({
                  text: `${props.position} `,
                  bold: true,
                }),
                new TextRun("at our company The Company since "),
                new TextRun({
                  text: `${props.dateStarted} `,
                  bold: true,
                }),
                new TextRun("until "),
                new TextRun({
                  text: `${props.dateEffective}. `,
                  bold: true,
                }),
                new TextRun(
                  "We wish him/her every success in his/her career pursuit."
                ),
              ],
            }),
            // new Paragraph({
            //   text: `This letter is to confirm that ${props.person} has been employed as ${props.position} at our company The Company since ${props.dateStarted} until ${props.dateEffective}. We wish him/her every success in his/her career pursuit.`,
            //   style: "whatever",
            // }),
            new Paragraph({
              text: `If you have any questions or require additional information, please contact me at 12345678 .`,
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
      saveAs(
        blob,
        `referenceletter-${props.person}-${moment(new Date()).format(
          "DD-MM-YYYY"
        )}.docx`
      );
      console.log("Document created successfully");
    });
  };

  return (
    <div className="statusCard">
      <h2 className="status" style={statusColor}>
        {props.status}
      </h2>
      <h4 className="dateApplied">Date Applied: {props.dateApplied}</h4>
      <div>
        <img
          className="profilepic"
          src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
        ></img>
        <h3 className="person">{props.person}</h3>
        <br />
        <h3 className="position">{props.position}</h3>
      </div>
      {/* <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${props.completed}%`}</span>
        </div>
      </div> */}
      <button>Calc Compensation</button>
      {/* <GenRefLetter props /> */}
      <button onClick={generate}>Generate Reference Letter</button>
      <button
        onClick={() => openInNewTab("https://www.ird.gov.hk/chi/paf/for.htm")}
      >
        Tax Filings
      </button>
      <button>Edit Status</button>
    </div>
  );
}
