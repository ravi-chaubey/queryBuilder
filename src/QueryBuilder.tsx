// src/QueryBuilder.tsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const QueryBuilder = () => {
  const [field, setField] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');
  const [queries, setQueries] = useState<{ field: string; operator: string; value: string }[]>([]);

  const handleAddQuery = () => {
    setQueries([...queries, { field, operator, value }]);
    setField('');
    setOperator('');
    setValue('');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Query Builder
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Field</InputLabel>
        <Select value={field} onChange={(e) => setField(e.target.value)}>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="age">Age</MenuItem>
          <MenuItem value="email">Email</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Operator</InputLabel>
        <Select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <MenuItem value="equals">Equals</MenuItem>
          <MenuItem value="not_equals">Not Equals</MenuItem>
          <MenuItem value="greater_than">Greater Than</MenuItem>
          <MenuItem value="less_than">Less Than</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        margin="normal"
        label="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddQuery}>
        Add Query
      </Button>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Queries:</Typography>
        {queries.map((query, index) => (
          <Typography key={index}>
            {query.field} {query.operator} {query.value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default QueryBuilder;
