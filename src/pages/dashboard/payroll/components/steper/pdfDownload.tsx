import React from "react";
import { Page, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";

// Font.register({
//   family: "sans-serif",
//   src: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
// });

const styles = StyleSheet.create({
  page: {
    // fontFamily: " sans-serif",
    padding: 30,
  },
});

const htmlContent = `
  <div>
    <h1 style="font-size: 24px; margin-bottom: 20px;">Payroll Report</h1>
    
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
      <div>
        <p style="font-size: 14px; color: #888;">Payroll Period</p>
        <p style="font-size: 16px;">Jul 1st - 31st, 2022</p>
      </div>
      <div>
        <p style="font-size: 14px; color: #888;">Pay Day</p>
        <p style="font-size: 16px;">Aug 1st, 2022</p>
      </div>
    </div>
    
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
      <div>
        <p style="font-size: 14px; color: #888;">Total Employee</p>
        <p style="font-size: 16px;">22</p>
      </div>
      <div>
        <p style="font-size: 14px; color: #888;">Payroll Type</p>
        <p style="font-size: 16px;">Regular</p>
      </div>
    </div>
    
    <div style="border: 1px solid #ddd; padding: 20px; margin-bottom: 20px;">
      <h2 style="font-size: 18px; margin-bottom: 15px;">Working Hour Summary</h2>
      <div style="display: flex; justify-content: space-around;">
        <div>
          <p style="font-size: 14px; color: #888;">Total Working hours</p>
          <p style="font-size: 18px; font-weight: bold;">320.00Hrs</p>
        </div>
        <div>
          <p style="font-size: 14px; color: #888;">Total Time Off</p>
          <p style="font-size: 18px; font-weight: bold;">120.00Hrs</p>
        </div>
      </div>
    </div>
    
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
      <div>
        <p style="font-size: 14px; color: #888;">Total payroll</p>
        <p style="font-size: 24px; font-weight: bold;">$12,607.09</p>
      </div>
      <div>
        <p style="font-size: 14px; color: #888;">Taxed</p>
        <p style="font-size: 18px;">$5,165.17</p>
      </div>
      <div>
        <p style="font-size: 14px; color: #888;">Debited</p>
        <p style="font-size: 18px;">$5,165.17</p>
      </div>
    </div>
    
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f5f5f5;">
          <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Tax Description</th>
          <th style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">By employee</th>
          <th style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">By company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">CA ETT</td>
          <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">N/A</td>
          <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">$11.85</td>
        </tr>
        <tr>
          <td style="padding: 10px;">CA State income tax</td>
          <td style="padding: 10px; text-align: right;">$2,933.98</td>
          <td style="padding: 10px; text-align: right;">N/A</td>
        </tr>
      </tbody>
    </table>
  </div>
`;

const PayrollReportPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Html>{htmlContent}</Html>
    </Page>
  </Document>
);

export default PayrollReportPDF;
