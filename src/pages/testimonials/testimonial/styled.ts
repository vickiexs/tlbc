import styled from "styled-components";

export const StyledTestimonial = styled(`div`)(({ theme }) => ({
  display: "flex",
}));

export const StyledTestimonialContent = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
}));

export const StyledTestimonialHeader = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: 75,
  gap: theme.spacing(2),

  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
}));

export const StyledUser = styled(`div`)(({ theme }) => ({
}));

export const StyledTrip = styled(`div`)(({ theme }) => ({
}));

export const StyledDescription = styled(`div`)(({ theme }) => ({
  display: "flex",
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.light,
}));

