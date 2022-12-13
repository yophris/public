import { Button } from '@mui/material';
import AppButton from 'components/AppButton';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div style={{ height: 'calc(100vh - 64px)' }}>
      <img src="" />
      <h1 style={{ textAlign: 'center', color: 'black', fontSize: '2rem' }}>
        404 Page Not Found
      </h1>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '20px auto' }}>
          <Link href="/app">
            <AppButton color="secondary">Go Home</AppButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
