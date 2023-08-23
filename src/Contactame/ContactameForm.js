import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjvgqdr");
  if (state.succeeded) {
    return <p>Thanks for contact me!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Let's&ensp; </h1>
        <h1 className="colorTalk"> talk</h1>
        <Grid container sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}>
          <Grid item xs={12} md={12}>
            <p className="marginContact">
              If you want to contact me, fill out the form and i will get back
              to you soon.
            </p>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="full-name"
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              sx={{ width: "100%" }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="_replyto"
              id="email-address"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            {" "}
            <TextField
              label="Message"
              multiline
              name="message"
              id="message"
              rows={4}
              sx={{ width: "100%" }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              type="submit"
              disabled={state.submitting}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default ContactForm;
