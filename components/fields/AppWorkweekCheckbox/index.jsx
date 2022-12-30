import { Stack, Typography } from '@mui/material';
import SingleWorkweek from './SingleWorkweek';

export default function AppWorkweekCheckbox(props) {
  const { setValue, name, ...rest } = props;

  return (
    <div>
      <Typography variant="body_medium_muted" component="p" mb={1}>
        {rest.label}
        {rest.isRequired && (
          <Typography
            variant="body_bold"
            sx={{ marginLeft: '4px', color: '#F53E40' }}
          >
            *
          </Typography>
        )}
      </Typography>
      <Stack direction="row" spacing={1}>
        {rest.attrs.map((attr) => (
          <SingleWorkweek
            key={attr.name}
            name={attr.name}
            setValue={setValue}
          />
        ))}
      </Stack>
    </div>
  );
}
