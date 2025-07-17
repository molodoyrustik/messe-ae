import {
  Dialog,
  DialogContent,
  Drawer,
  IconButton,
  Typography,
  Box,
  Link,
} from '@mui/material';
import { Job } from './JobCard';

interface JobModalProps {
  job: Job;
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
}

export default function JobModal({ job, open, onClose, isMobile }: JobModalProps) {
  const getJobContent = () => {

    const baseWhatWeProvide = [
      'You will work in a highly enthusiastic environment with passionate colleagues;',
      'An extensive training period, familiarizing you with our business and all stages of the process;',
      'A representative salary according to your experience and education;',
      'An opportunity to develop yourself within a fast-growing international company;',
      'An opportunity to work alongside a team with a wide variety of different nationalities.'
    ];

    if (job.id === '1') {
      return {
        aboutJob: 'As a Quantity Surveyor specialized in events and exhibitions, you will play a crucial role in managing the costs and budgets associated with our projects. You will work closely with the project management team to ensure that financial aspects are meticulously controlled, and resources are optimally allocated. Your expertise will be instrumental in ensuring the profitability and success of our events and exhibitions.',
        whatWeProvide: baseWhatWeProvide,
        remunerationPackage: [
          'Basic medical insurance cover, as per UAE law.',
          'Postpaid SIM card and a basic smartphone, data and call package included for business purposes.',
          'Company laptop.',
          '30 days paid vacation',
          'Salary 8000 AED/month',
          'Working hours: 9-18'
        ]
      };
    } else if (job.id === '2') {
      return {
        aboutJob: null,
        whatWeProvide: baseWhatWeProvide,
        remunerationPackage: [
          'Basic medical insurance cover, as per UAE law;',
          'Postpaid SIM card and a basic smartphone, data and call package included for business purposes;',
          'Company laptop;',
          '30 days paid vacation.'
        ]
      };
    } else if (job.id === '3') {
      return {
        aboutJob: 'We are looking for a technically skilled Equipment Design Engineer for Exhibition Stands to join our dynamic team. In this role, you will be responsible for conceptualizing, designing and ensuring completion drawings on time. You will work closely with project manager, production team and other stakeholders to ensure that all design requirements are met and that the final product aligns with the client\'s vision. You will be expected to provide guidance and support to the production team throughout the project lifecycle.',
        additionalDescription: 'You will be involved in every stage of the equipment design process, from initial concept development to final execution, ensuring that all elements are aligned with the client\'s objectives – including installation and dismantling of equipment directly at the exhibition. This role requires a strong understanding of structural engineering, lighting, load calculation and other technical aspects of exhibition equipment production. The ideal candidate will have the ability to work under pressure in a fast-paced environment.',
        whatWeProvide: [
          'Monthly salary via WPS;',
          'Employment and Resident VISA;',
          'Basic Medical Insurance as per UAE law;',
          'Leave period 1 month;',
          'Trial period 3+3 (total 6 months).'
        ],
        remunerationPackage: null
      };
    }
    
    return { aboutJob: null, whatWeProvide: baseWhatWeProvide, remunerationPackage: null };
  };

  const jobContent = getJobContent();

  const content = (
    <Box
      sx={{
        maxWidth: 'none',
        mx: 'auto',
        p: isMobile ? 0 : '2rem',
        overflowX: 'auto',
      }}
    >
      {!isMobile && (
        <>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: '2rem',
              lineHeight: '2.5rem',
              color: '#262626',
              mb: '1rem',
            }}
          >
            {job.title} position
          </Typography>
          
          <Box sx={{ mb: '2rem' }}>
            {/* Empty div equivalent to gallery-bg-objects */}
            <Box sx={{ height: 0, overflow: 'hidden' }}>&nbsp;</Box>
          </Box>
        </>
      )}
      
      <Box sx={{ className: 'text text-page-content vacancy-text', mt: isMobile ? 0 : 0 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: '1.75rem',
            color: '#262626',
            mb: '1rem',
            mt: isMobile ? '1rem' : 0,
          }}
        >
          Company Description
        </Typography>
        <Typography sx={{ mb: '1rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
          Messe.ae is a part of Expoglobal Group operating in the Middle East based in Dubai. With more than 20 years of experience in Design, Project Management, Exhibition Stand Building and Custom-Made Solutions we work with a wide range of customers in multiple sectors creating stands for small businesses as well as for international corporations.
        </Typography>
        <Typography sx={{ mb: '1rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
          Our service is guaranteed worldwide thanks to the convenient location of our offices in Antwerp and Dubai. We can extend our services to multiple countries and events with partners in Southeast Asia, India, South America, and South Africa.
        </Typography>
        <Typography sx={{ mb: '1rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
          Messe.ae is happy to offer the position of {job.title}.
        </Typography>
        
        {/* About the job or Role Requirements */}
        {job.id === '2' ? (
          <Box sx={{ mb: '2rem' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1.5rem',
                lineHeight: '1.75rem',
                color: '#262626',
                mb: '1rem',
              }}
            >
              <Box component="strong">Role Requirements:</Box>
            </Typography>
            <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
              {job.requirements.map((req, index) => (
                <Typography key={index} component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  {req};
                </Typography>
              ))}
            </Box>
          </Box>
        ) : job.id === '3' ? (
          <Box sx={{ mb: '2rem' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1.5rem',
                lineHeight: '1.75rem',
                color: '#262626',
                mb: '1rem',
              }}
            >
              Vacancy Description
            </Typography>
            <Typography sx={{ mb: '1rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
              {jobContent.aboutJob}
            </Typography>
            <Typography sx={{ mb: '1rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
              {jobContent.additionalDescription}
            </Typography>
          </Box>
        ) : jobContent.aboutJob ? (
          <Box sx={{ mb: '2rem' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1.5rem',
                lineHeight: '1.75rem',
                color: '#262626',
                mb: '1rem',
              }}
            >
              <Box component="strong">About the job</Box>
            </Typography>
            <Typography sx={{ mb: '1rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
              {jobContent.aboutJob}
            </Typography>
          </Box>
        ) : null}
        
        {/* Responsibilities */}
        {job.responsibilities && job.responsibilities.length > 0 && (
          <Box sx={{ mb: '2rem' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1.5rem',
                lineHeight: '1.75rem',
                color: '#262626',
                mb: '1rem',
              }}
            >
              <Box component="strong">
                {job.id === '2' ? 'Tasks and Responsibilities:' : 
                 job.id === '3' ? 'Responsibilities:' : 
                 'Key Responsibilities:'}
              </Box>
            </Typography>
            {job.id === '1' ? (
              // Quantity Surveyor detailed structure
              <>
                <Typography sx={{ mb: '0.5rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  Cost Estimation and Budgeting:
                </Typography>
                <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Prepare accurate and detailed cost estimates for events and exhibition projects.
                  </Typography>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Develop and manage project budgets, ensuring alignment with client expectations and company profitability targets.
                  </Typography>
                </Box>

                <Typography sx={{ mb: '0.5rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  Tendering and Procurement:
                </Typography>
                <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Oversee the tendering process, including the preparation of tender documents, evaluation of bids, and negotiation with suppliers and contractors.
                  </Typography>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Source and select subcontractors, suppliers, and vendors based on cost, quality, and reliability.
                  </Typography>
                </Box>

                <Typography sx={{ mb: '0.5rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  Contract Management:
                </Typography>
                <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Administer contracts and agreements with subcontractors, suppliers, and vendors.
                  </Typography>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Ensure compliance with contractual terms and conditions, and manage variations as required.
                  </Typography>
                </Box>

                <Typography sx={{ mb: '0.5rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  Cost Control and Reporting:
                </Typography>
                <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Monitor project costs and expenditures against approved budgets.
                  </Typography>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Provide regular financial reports to project management, highlighting any variances and proposing corrective actions.
                  </Typography>
                </Box>

                <Typography sx={{ mb: '0.5rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  Value Engineering:
                </Typography>
                <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Identify opportunities for cost optimization and value engineering without compromising quality or client satisfaction.
                  </Typography>
                </Box>

                <Typography sx={{ mb: '0.5rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  Risk Assessment and Mitigation:
                </Typography>
                <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Identify potential risks related to costs, and develop strategies to mitigate them.
                  </Typography>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Maintain a proactive approach to risk management throughout the project lifecycle.
                  </Typography>
                </Box>

                <Typography sx={{ mb: '0.5rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  Documentation and Record Keeping:
                </Typography>
                <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
                  <Typography component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    Maintain accurate and organized records of all financial transactions, contracts, and project-related documentation.
                  </Typography>
                </Box>
              </>
            ) : (
              // Other jobs - simple list
              <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
                {job.responsibilities.map((resp, index) => (
                  <Typography key={index} component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                    {resp};
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        )}

        {/* Requirements */}
        {job.requirements && job.requirements.length > 0 && job.id !== '2' && (
          <Box sx={{ mb: '2rem' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1.5rem',
                lineHeight: '1.75rem',
                color: '#262626',
                mb: '1rem',
              }}
            >
              <Box component="strong">
                {job.id === '1' ? 'Qualifications and Skills:' : 'Requirements:'}
              </Box>
            </Typography>
            <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
              {job.requirements.map((req, index) => (
                <Typography key={index} component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  {req}{job.id === '1' ? '.' : ';'}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        {/* What we provide */}
        <Box sx={{ mb: '2rem' }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: '1.5rem',
              lineHeight: '1.75rem',
              color: '#262626',
              mb: '1rem',
            }}
          >
            <Box component="strong">
              {job.id === '3' ? 'Company providing' : 'What We Provide?'}
            </Box>
          </Typography>
          <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
            {jobContent.whatWeProvide.map((item, index) => (
              <Typography key={index} component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Remuneration package */}
        {jobContent.remunerationPackage && (
          <Box sx={{ mb: '2rem' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: '1.5rem',
                lineHeight: '1.75rem',
                color: '#262626',
                mb: '1rem',
              }}
            >
              <Box component="strong">And Remuneration Package:</Box>
            </Typography>
            <Box component="ul" sx={{ pl: '1.5rem', mb: '1rem', m: 0 }}>
              {jobContent.remunerationPackage.map((item, index) => (
                <Typography key={index} component="li" sx={{ mb: '0.25rem', fontFamily: 'Roboto', fontSize: '1rem', lineHeight: '1.5rem', color: '#000' }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        <Box sx={{ borderTop: '1px solid #E0E0E0', my: '1rem' }} />
        
        <Link
          href="mailto:hello@messe.ae"
          sx={{
            display: 'inline-block',
            px: '1.5rem',
            py: '0.75rem',
            backgroundColor: '#656CAF',
            color: '#FFFFFF',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontFamily: 'Roboto',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',
            '&:hover': {
              backgroundColor: '#4C53A2',
            },
          }}
        >
          Apply
        </Link>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        hideBackdrop
        sx={{
          '& .MuiDrawer-paper': {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            height: 'calc(100vh - 2.5rem)',
            maxHeight: 'calc(100vh - 2.5rem)',
            top: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            p: 0,
          },
        }}
      >
        {/* Header with back arrow */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            left: 0,
            right: 0,
            display: 'inline-flex',
            height: '2.5rem',
            padding: '0.5rem 0.875rem 0.5rem 0.5rem',
            alignItems: 'flex-start',
            gap: '0.25rem',
            flexShrink: 0,
            borderBottom: '1px solid #E9E9E9',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(4px)',
            zIndex: 10,
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              p: 0,
              width: '1.5rem',
              height: '1.5rem',
              color: '#262626',
              ml: '0.5rem',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </IconButton>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              lineHeight: '1.5rem',
              letterSpacing: '0.02em',
              color: '#262626',
              fontFamily: 'Roboto',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flex: 1,
            }}
          >
            {job.title} position
          </Typography>
        </Box>
        
        {/* Content */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            px: '1rem',
            pt: '0.5rem',
            pb: 'max(env(safe-area-inset-bottom), 1.5rem)',
          }}
        >
          {content}
        </Box>
      </Drawer>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: '50rem',
          maxWidth: '90vw',
          height: '35rem',
          maxHeight: '90vh',
          borderRadius: '0.5rem',
          overflow: 'visible',
          position: 'relative',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: '0',
          top: '-2rem',
          color: 'white',
          backgroundColor: 'transparent',
          p: 0,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M18 18L6 6" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </IconButton>
      
      <DialogContent 
        sx={{ 
          p: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {content}
      </DialogContent>
    </Dialog>
  );
}