import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const TagsModal = ({ tags, inputString, selectedTag }) => {
  useEffect(() => { }, [inputString, tags]);
  return (
    <div
      id='tagOptions'
      className='tagsContiner'
      aria-live='polite' aria-atomic='true'
      aria-relevant='all'
      role={'region'}
    >
      <div
        aria-label={
          `available tags ${tags.toString()}
          Use Tab and shift tab to access tags
          Press enter button to select 
          `
        }
      >
        {
          tags && tags.map((value, index) => {
            return (
              <div
                key={value + index.toString()}
              >
                <button
                  className='tagButton'
                  value={value}
                  onClick={(e) => {
                    e.currentTarget.blur();
                    selectedTag(value);
                  }}>
                  {value}
                </button>
              </div>
            );


          })
        }

      </div>

      {
        tags && tags.length === 0 && <p>no match</p>
      }
    </div >

  );
};

TagsModal.propTypes = {
  tags: PropTypes.array,
  inputString: PropTypes.string,
  selectedTag: PropTypes.func
};

export default TagsModal;