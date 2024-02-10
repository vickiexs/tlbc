import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { StyledColumn, StyledContainer } from "./styled";

import Testimonial from "./testimonial/index";

export default function Testimonials() {

  const mock_testimonial = [
    {
      user: { name: "john", location: "usa", img: "" },
      trip: "Greenland",
      description: "it was epic!"
    },
    {
      user: { name: "doe", location: "mexico", img: "" },
      trip: "Norway",
      description: "Very cool! Thank you"
    },
    {
      user: { name: "doe", location: "mexico", img: "" },
      trip: "Norway",
      description: "Very cool! Thank you"
    },
  ]

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  const mid = mock_testimonial.length / 2;
  const end = isMobile ? mock_testimonial.length : mid;

  return (
    <>
      <h1 style={{ marginTop: "200px" }}>TESTIMONIALS</h1>
      <StyledContainer>
        <StyledColumn>
          {mock_testimonial.slice(0, end).map((testimonial, index) => (
            <Testimonial
              key={index}
              user={testimonial.user}
              trip={testimonial.trip}
              description={testimonial.description}
              locationLabel="Joined us in"
              expandLabel="Read more"
              shrinkLabel="Show less"
            />
          ))}
        </StyledColumn>
        {!isMobile && (
          <StyledColumn>
            {mock_testimonial.slice(mid).map((testimonial, index) => (
              <Testimonial
                key={index}
                user={testimonial.user}
                trip={testimonial.trip}
                description={testimonial.description}
                locationLabel="Joined us in"
                expandLabel="Read more"
                shrinkLabel="Show less"
              />
            ))}
          </StyledColumn>
        )}
      </StyledContainer>
    </>
  );
}


