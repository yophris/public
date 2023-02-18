import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Index() {
  const links = [
    {
      label: 'Leave Form',
      to: '/app/ess/leave-form',
    },
    {
      label: 'Reimbursement Form',
      to: '/app/ess/reimbursement-form',
    },
    {
      label: 'WFH Form',
      to: '/app/ess/wfh-form',
    },
    {
      label: 'Branch Transfer Form',
      to: '/app/ess/branch-transfer-form',
    },
    {
      label: 'Regularisation Form',
      to: '/app/ess/regularisation-form',
    },

    {
      label: 'Termination Form',
      to: '/app/ess/termination-form',
    },
    {
      label: 'Resignation Form',
      to: '/app/ess/resignation-form',
    },
  ];
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {links.map((link, i) => {
        return (
          <Box key={`${i}Link`} sx={{}}>
            <Link
              href={`${link.to}`}
              style={{ fontSize: '2rem', marginBotton: '1rem' }}
            >
              {link.label}
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}
