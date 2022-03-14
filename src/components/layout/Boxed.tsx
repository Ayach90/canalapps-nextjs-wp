import { Box, BoxProps, Container } from "@mui/material";

const Boxed = ({ children, ...props }: BoxProps) => {
  return (
    <Container maxWidth="lg">
      <Box {...props} sx={{ paddingY: 3, ...(props.sx || {}) }}>
        {children}
      </Box>
    </Container>
  );
};

export default Boxed;
