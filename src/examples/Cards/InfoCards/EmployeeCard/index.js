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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import ivana from "../../../../assets/images/ivana-squares.jpg";
import React from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

function DefaultInfoCard({
  color,
  icon,
  title,
  description,
  value,
  role,
  dept,
  hdate,
  email,
  phone,
}) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ["Preview", "Edit"];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Card
      style={{
        backgroundColor: "#e5e5e5",
        padding: 10,
      }}
      sx={{ maxWidth: 345, width: "30%", minWidth: 250 }}
    >
      <SoftBox p={2} mx={3} display="flex" justifyContent="space-between" alignItems="baseline">
        <SoftBox>
          <SoftBox
            display="grid"
            justifyContent="center"
            bgColor={color}
            color="white"
            width="4rem"
            height="4rem"
            shadow="md"
            borderRadius="50%"
            variant="gradient"
          >
            {/* <Icon fontSize="default">{ivana}</Icon> */}
            <img src={ivana} width="100%" style={{ overflow: "hidden", borderRadius: "50%" }} />
          </SoftBox>
          <SoftBox pt={2} textAlign="left" lineHeight={1.25}>
            <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {title}
            </SoftTypography>
            {role && (
              <SoftTypography variant="caption" color="text" fontWeight="regular">
                {role}
              </SoftTypography>
            )}
          </SoftBox>
        </SoftBox>

        <SoftBox>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SoftTypography
                  variant="h1"
                  color="text"
                  fontWeight="medium"
                  textTransform="capitalize"
                >
                  <MoreHorizIcon />
                </SoftTypography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <SoftTypography variant="h6" color="text" fontWeight="small" textAlign="center">
                    {setting}
                  </SoftTypography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </SoftBox>
      </SoftBox>

      <SoftBox p={2.5} style={{ backgroundColor: "#f2f2f2" }} borderRadius="lg" lineHeight={1.25}>
        <SoftBox textAlign="center" display="flex" justifyContent="space-between">
          <SoftBox>
            <SoftTypography
              variant="h6"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              Department
            </SoftTypography>
            <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {dept}
            </SoftTypography>
          </SoftBox>
          <SoftBox>
            <SoftTypography
              variant="h6"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              Hired Date
            </SoftTypography>
            <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              {hdate}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
        <SoftBox textAlign="center" lineHeight={1.25} pt={2}>
          <SoftTypography variant="h6" display="flex" alignItems="center" gap="10px">
            <Icon>{"email"}</Icon>
            <a href={`mailto:${email}`} style={{ color: "inherit" }}>
              {email}
            </a>
          </SoftTypography>
          <SoftTypography variant="h6" display="flex" alignItems="center" gap="10px">
            <Icon>{"phone"}</Icon>
            {phone}
          </SoftTypography>
          <SoftTypography></SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  value: "",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dept: PropTypes.string,
  role: PropTypes.string,
  hdate: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default DefaultInfoCard;
