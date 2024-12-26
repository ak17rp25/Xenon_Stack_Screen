import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Dropdown = ({ items = ['SUPPLIER_references', 'NATION_references_REGION', 'ORDERS_references_CUSTOMER', 'data_lake'] }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState('ORDERS_references_CUSTOMER');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: 200,
        padding: '8px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        marginBottom: '16px',
      }}
    >
      <TextField
        fullWidth
        placeholder="search Data"
        value={searchTerm}
        onChange={handleSearch}
        sx={{
          marginBottom: '8px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'Inter',
            color: 'rgba(0, 0, 0, 0.6)',
            '& fieldset': {
              borderColor: 'rgba(0, 0, 0, 0.1)',
            },
          },
        }}
      />
      <Paper
        elevation={0}
        sx={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <List sx={{ padding: 0 }}>
          {filteredItems.map((item) => (
            <ListItem
              key={item}
              onClick={() => handleItemClick(item)}
              sx={{
                padding: '8px',
                cursor: 'pointer',
                backgroundColor: selectedItem === item ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemText
                primary={item}
                sx={{
                  '& .MuiTypography-root': {
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#101828',
                  },
                }}
              />
              {selectedItem === item && (
                <img 
                  src="https://dashboard.codeparrot.ai/api/assets/Z21YnQ16ERs_8IA_"
                  alt="check"
                  style={{
                    width: '20px',
                    height: '20px',
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Dropdown;
