import {
  Button,
  Font,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

const VerificationEmail = ({ username, otp }: VerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KF0mCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        ></Font>
      </Head>
      <Preview>Here&apos;s your verification code: {otp}</Preview>
      <Section>
        <Row>
          <Text>
            Thank you for registering. Please use the following verification
            code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
        <Row>
          <Text>
            If you did not request this code, please ignore this email
          </Text>
        </Row>
        {/* <Row>
            <Button href={`http://localhost:3000/verify/${username}`} style={{color:`#61dafb`}}>
                Verify here
            </Button>
        </Row> */}
      </Section>
    </Html>
  );
};

export default VerificationEmail;
