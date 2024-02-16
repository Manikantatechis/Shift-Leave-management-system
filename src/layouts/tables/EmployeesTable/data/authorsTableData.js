/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "employee", align: "left" },
    { name: "role", align: "left" },
    { name: "requested on", align: "center" },
    { name: "requested from", align: "center" },
    { name: "requested to", align: "center" },
    { name: "days", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      employee: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
      role: <Function job="Manager" org="Organization" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Approved" color="success" size="xs" container />
      ),
      ["requested on"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested from"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested to"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),

      days: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3
        </SoftTypography>
      ),
     
    },
    {
      employee: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
      role: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
          container
        />
      ),
      ["requested on"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested from"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested to"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SoftTypography>
      ),
      days: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
    {
      employee: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
      role: <Function job="Executive" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Approved" color="success" size="xs" container />
      ),
      ["requested on"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested from"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested to"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SoftTypography>
      ),
      days: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3
        </SoftTypography>
      ),
     
    },
    {
      employee: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
      role: <Function job="Programator" org="Developer" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="Approved" color="success" size="xs" container />
      ),
      ["requested on"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested from"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested to"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SoftTypography>
      ),
      days: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3
        </SoftTypography>
      ),
     
    },
    {
      employee: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
      role: <Function job="Manager" org="Executive" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Rejected"
          color="error"
          size="xs"
          container
        />
      ),
      ["requested on"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested from"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested to"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SoftTypography>
      ),
      days: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3
        </SoftTypography>
      ),
     
    },
    {
      employee: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
      role: <Function job="Programtor" org="Developer" />,
      status: (
        <SoftBadge
          variant="gradient"
          badgeContent="Pending"
          color="secondary"
          size="xs"
          container
        />
      ),
      ["requested on"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested from"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SoftTypography>
      ),
      ["requested to"]: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SoftTypography>
      ),
      days: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          3
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    },
  ],
};

export default authorsTableData;
