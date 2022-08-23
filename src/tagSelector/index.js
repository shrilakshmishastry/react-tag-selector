import React, { useRef, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

import TagsModal from './TagsModal';



const TagSelector = ({
  tagsFilter,
  selectedTag,
  removeTag,
  lableForInputTag
}) => {
  const [inputString, setInputString] = useState();
  const [tags, setSelectedTags] = useState([]);
  const [notSelectedTags, setNotSelectedTags] = useState(tagsFilter);
  const [availableTagsForModal, setAllavailableTagsForModal] = useState(tagsFilter);
  const inputRef = useRef(null);

  const handleRemoveTag = (value, index) => {
    let interMediateArr = [...tags];
    inputRef.current.focus();
    interMediateArr.splice(index, 1);
    setSelectedTags([...interMediateArr]);
    setNotSelectedTags([...notSelectedTags, value]);
    setAllavailableTagsForModal([...notSelectedTags, value]);
    removeTag(index);
  };

  const handleSelectedTag = (value) => {
    setSelectedTags([...tags, value]);
    let interMediateArr = [...notSelectedTags];
    let index = notSelectedTags.indexOf(value);
    interMediateArr.splice(index, 1);
    setInputString('');
    inputRef.current.focus();
    setNotSelectedTags([...interMediateArr]);
    setAllavailableTagsForModal([...interMediateArr]);
    selectedTag(value);
  };

  const handleKeyDown = (event) => {

    if (event.key === 'Backspace'
      && tags.length > 0 &&
      inputRef.current.value.length === 0) {
      let intermediateArr = [...tags];
      let removed = intermediateArr.pop();
      setSelectedTags(intermediateArr);
      selectedTag(intermediateArr);
      setNotSelectedTags([...notSelectedTags, removed]);
      setAllavailableTagsForModal([...notSelectedTags, removed]);
    }
  };

  const handleInputChange = (value) => {
    setInputString(value.target.value);
    let interArr = [...notSelectedTags];
    let res = interArr.filter((val) => val.includes(value.target.value));
    setAllavailableTagsForModal([...res]);
  }

  return (
    <div className='tagSelectionContainer'>
      <div
        aria-label={'Search Tag' || lableForInputTag}
        className='tagSelectedWrap'
        id='tagSearchContainer'
        tabIndex={0}
        onKeyDown={(event) => handleKeyDown(event)}>

        {
          tags && tags.map((value, index) => {
            return (
              <button className='tagButtonCancelable'
                key={value}
                aria-live='polite' aria-atomic='true'
                aria-relevant='all'
                value={value}
                tabIndex={0}
                aria-label={`Press enter to deselect ${value}`}
                onClick={(e) => {
                  e.currentTarget.remove();
                  handleRemoveTag(value, index);
                }}
              >
                {value}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x svgCancel"
                  viewBox="0 0 16 16">
                  <path
                    // eslint-disable-next-line max-len
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            );
          })

        }



        <input className='tagInput'
          id='tag-input'
          ref={inputRef}
          aria-labelledby='tagSearchContainer'
          type='text'
          onChange={(e) => {
            handleInputChange(e);
          }}
          placeholder={'Tags'}
        />
      </div>

      {
        inputString && (
          <TagsModal
            selectedTag={(value) => {
              handleSelectedTag(value);
              inputRef.current.value = '';
              setInputString('');
            }}
            tags={availableTagsForModal}
            inputString={inputString} />
        )
      }

    </div>
  );
};

TagSelector.propTypes = {
  tagsFilter: PropTypes.array,
  selectedTag: PropTypes.func,
  removeTag: PropTypes.func
};
export default TagSelector;
