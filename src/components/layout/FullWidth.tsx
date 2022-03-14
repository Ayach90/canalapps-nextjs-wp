import { Box, BoxProps, Container } from "@mui/material";

const FullWidth = ({ children, ...props }: BoxProps) => {
  return (
    <Box {...props} sx={{ paddingY: 3, ...(props.sx || {}) }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export default FullWidth;
