export interface TestimonialProps {
  user: User;
  trip: string;
  description: string;
  locationLabel: string;
  expandLabel: string;
  shrinkLabel: string;
}

export interface User {
  img: string;
  name: string;
  location: string;
}
