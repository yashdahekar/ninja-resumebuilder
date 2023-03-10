import {
  WhatsApp,
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  Reddit,
  Email,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./styles/About.css";

const AboutUs = () => {
  return (
    <div>
      {/* Creates a stack with padding for different screen sizes */}
      <Stack p={{ xs: "15px", sm: "25px", md: "30px", lg: "33px " }}>
        {/* Header title */}
        <h2 className="header-title">Resume Builder</h2>
        {/* Creates a stack to hold the text and image, sets direction and spacing for different screen sizes */}
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          {/* Text describing the website's features and benefits */}
          <Typography
            className="Typography"
            sx={{
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "16px",
                lg: "17px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Our resume builder website allows users to create professional and polished resumes quickly and easily. One of the key features of the website is the ability to select from a wide range of customizable templates. These templates are designed by professional designers to ensure that your resume looks and feels modern and attractive. The templates are also fully editable, so you can customize them to match your personal style and the requirements of the job you're applying for. 
            The website is hosted on GitHub Pages as a project, which means it is easily accessible and can be edited by anyone who wants to contribute to the project. This also makes it easy to update the website and templates with the latest designs and features.
            Overall, our resume builder website is a powerful tool for job seekers looking to create a professional and impressive resume that can help them land the job they want. With its wide range of customizable templates, easy-to-use interface,
            the website makes it simple for anyone to create a great-looking resume that stands out from the crowd.
          </Typography>
          <Stack className="img">
             {/* Image container */}
            <img
              src="https://media.istockphoto.com/id/849410148/vector/human-resources-management-concept.jpg?s=612x612&w=0&k=20&c=YCuOlwFaN2jwhCUmu3px_4AdPctg_EH8ud-9iGYwr2M="
              alt="resume-builder-img"
            />
          </Stack>
        </Stack>
                {/* Share text */}
        <Stack>
          <Typography
            className="Share"
            sx={{
              fontSize: {
                lg: "30px",
                md: "28px",
                sm: "27px",
                sx: "25px",
              },
              fontWeight: "550",
              marginTop: "25px",
            }}
          >
            Please share your with friends
          </Typography>
        </Stack>
                {/* Social media icons */}
        <Box className="icons">
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp
              className="WhatsApp"
              sx={{ fontSize: "35px", margin: 1 }}
            ></WhatsApp>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              className="Facebook"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Facebook>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              className="LinkedIn"
              sx={{ fontSize: "35px", margin: 1 }}
            ></LinkedIn>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              className="Instagram"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Instagram>
          </a>
          <a
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email
              className="Email"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Email>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              className="Twitter"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Twitter>
          </a>
          <a
            href="https://www.reddit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Reddit
              className="Reddit"
              sx={{ fontSize: "35px", margin: 1 }}
            ></Reddit>
          </a>
        </Box>
      </Stack>
    </div>
  );
};

export default AboutUs;
