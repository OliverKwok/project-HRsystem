import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    heigth: "5%",
    backgroundColor: "#4BC9D4",
  },

  title: {
    margin: 5,
    fontSize: 25,
    textAlign: "center",
    // backgroundColor: "#e4e4e4",
    textTransform: "uppercase",
    fontFamily: "Oswald",
  },
  seperation: {
    // flexGrow: 1,
    heigth: "1%",
    backgroundColor: "#24D1AE",
  },
  body: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexDirection: "row",
  },
  column: {
    flexGrow: 1,
    flexDirection: "column",
  },
  block: {
    flexGrow: 1,
  },
  text: {
    width: "80%",
    margin: 10,
    fontFamily: "Oswald",
    textAlign: "justify",
  },

  fill1: {
    width: "20%",
    backgroundColor: "#4BC9D4",
  },

  fill3: {
    flexGrow: 2,
    backgroundColor: "#e78632",
  },
  fill4: {
    flexGrow: 2,
    backgroundColor: "#e29e37",
  },
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

// Create Document Component
export default function MyDocument(props: any) {
  return (
    <Document>
      <Page size="A4">
        {/* <Link
          style={styles.title}
          src="https://es.wikipedia.org/wiki/Lorem_ipsum"
        >
          Lorem Ipsum
        </Link> */}

        <View style={styles.body}>
          <View style={styles.column}>
            <View style={{ backgroundColor: "#4BC9D4" }}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: 30,
                  textTransform: "uppercase",
                  fontFamily: "Oswald",
                  fontSize: 30,
                }}
              >
                The Company
              </Text>
            </View>

            <Text
              style={{
                color: "#4BC9D4",
                textAlign: "center",
                margin: 30,
                textTransform: "uppercase",
                fontFamily: "Oswald",
                fontSize: 25,
              }}
            >
              Payslip {props.year}-{props.month}
            </Text>

            <Text style={styles.text}>Employee ID: {props.employeeid}</Text>
            <Text style={styles.text}>Name: {props.name}</Text>

            <Text style={styles.text}>Salary: {props.basic_salary}</Text>
            <Text style={styles.text}>OT Pay: {props.ot_pay}</Text>
            <Text style={styles.text}>Bonus: {props.bonus}</Text>
            <Text style={styles.text}>Deduction: {props.nopay_leave}</Text>
            <Text style={styles.text}>MPF: {props.mpf_employee}</Text>

            <Text style={styles.text}>Total: {props.total}</Text>
          </View>

          {/* <View style={styles.row}> */}
          {/* </View> */}

          {/* <View style={styles.row}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Text>
            <View style={styles.fill1} />
          </View>
          <View style={styles.row}>
            <View style={styles.fill2} />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </Text>
            <View style={styles.fill3} />
          </View> */}
        </View>
      </Page>
    </Document>
  );
}
