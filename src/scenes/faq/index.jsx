import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="AB CASDCASDC" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Cau hoi 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed vel tempore, eaque non sapiente ea aut quasi
                        neque repudiandae, eligendi sit, quod ducimus doloremque
                        eveniet delectus amet optio earum eum?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Cau hoi 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed vel tempore, eaque non sapiente ea aut quasi
                        neque repudiandae, eligendi sit, quod ducimus doloremque
                        eveniet delectus amet optio earum eum?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Cau hoi 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed vel tempore, eaque non sapiente ea aut quasi
                        neque repudiandae, eligendi sit, quod ducimus doloremque
                        eveniet delectus amet optio earum eum?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Cau hoi 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed vel tempore, eaque non sapiente ea aut quasi
                        neque repudiandae, eligendi sit, quod ducimus doloremque
                        eveniet delectus amet optio earum eum?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Cau hoi 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Sed vel tempore, eaque non sapiente ea aut quasi
                        neque repudiandae, eligendi sit, quod ducimus doloremque
                        eveniet delectus amet optio earum eum?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
