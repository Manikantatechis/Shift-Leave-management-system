/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/EmployeesTable/data/authorsTableData";
import projectsTableData from "layouts/tables/EmployeesTable/data/projectsTableData";
import DefaultInfoCard from "examples/Cards/InfoCards/EmployeeCard";
import { Grid } from "@mui/material";
import SoftButton from "components/SoftButton";

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card  style={{ display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between",  padding:"1rem"}}>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" >
              <SoftTypography variant="h6">Employees</SoftTypography>
            </SoftBox>
            <SoftBox>
              <SoftButton variant="outlined" color="info" size="small">
                + Employees
              </SoftButton>
            </SoftBox>
          </Card>
          <SoftBox
            display="flex"
            justifyContent="space-evenly"
            flexWrap="wrap"
            alignItems="center"
            p={1}
            gap="20px"
          >
            <DefaultInfoCard
              color={"info"}
              icon={"vbhnjk"}
              title={"Mani"}
              dept={"Engineering"}
              role={"Junior Engineer"}
              hdate={"10/12/2012"}
              email={"mani@techis.io"}
              phone={"1234567890"}
            />
            <DefaultInfoCard
              color={"info"}
              icon={"vbhnjk"}
              title={"Taufeeq"}
              dept={"Engineering"}
              role={"Junior Engineer"}
              hdate={"10/12/2012"}
              email={"taufeeq@techis.io"}
              phone={"1234567890"}
            />
            <DefaultInfoCard
              color={"info"}
              icon={"vbhnjk"}
              title={"Sajith"}
              dept={"Engineering"}
              role={"Trainee"}
              hdate={"10/12/2019"}
              email={"sajith@techis.io"}
              phone={"123452342"}
            />
          </SoftBox>
        </SoftBox>
        {/* <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Projects table</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SoftBox>
        </Card> */}
      </SoftBox>
    </DashboardLayout>
  );
}

export default Tables;
