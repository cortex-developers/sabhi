import React, { useState } from 'react';
import { Modal, Box, IconButton, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { InstantSearch, connectSearchBox, connectHits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import TextField from '@mui/material/TextField';

const searchClient = algoliasearch('OE6JPU974L', 'e7f2cc8466e744a633f62ab445f961e2');

const SearchBox = ({ refine }) => (
    <TextField
        fullWidth
        type="search"
        onChange={(event) => refine(event.currentTarget.value)}
        variant="outlined"
        placeholder="Search for Articles, Wiki Entries, etc."
    />
);

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars except dash
    .replace(/--+/g, '-');    // Replace multiple dashes with a single dash

const Hits = ({ hits }) => {
  return (
    <Box sx={{ maxHeight: '400px', overflow: 'auto'}}>
      {hits.map(hit => {
        const title = hit.fields.title && hit.fields.title['en-US'];
        const slugifiedTitle = title ? slugify(title) : '';
        return title && (
          <Box key={hit.objectID} p={1} my={1} bgcolor="#f7f7f7">
            <strong>
              <Link href={`https://cortexflex.org/blog#${slugifiedTitle}`} target="_blank" rel="noopener noreferrer">
                {title}
              </Link>
            </strong>
          </Box>
        );
      })}
    </Box>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);
const CustomHits = connectHits(Hits);

function SearchModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton onClick={handleOpen} color="inherit">
                <SearchIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="search-modal-title"
                aria-describedby="search-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  width: '80%', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <InstantSearch searchClient={searchClient} indexName="cfaa_content">
                        <CustomSearchBox />
                        <CustomHits />
                    </InstantSearch>
                </Box>
            </Modal>
        </>
    );
}

export default SearchModal;
