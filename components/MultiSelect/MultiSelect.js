import React from 'react'
import PropTypes from 'prop-types'

import CM from './styles.module.css'
import Checkbox from '../Checkbox'
import Dropdown from '../Dropdown'

const MultiSelect = ({
  placeholder,
  items,
  selectedItems,
  onChange
}) => {

    function handleItemChange(checked, itemId) {
        const nextSelectedItems = checked ?
            selectedItems.concat(itemId) :
            selectedItems.filter((id) => (id !== itemId))

        onChange(nextSelectedItems)
    }

    const selectedItemTitles = selectedItems.map(
        (selectedItemId) => items.find(
            ({ id }) => (id === selectedItemId)
        ).name
    )

  return <Dropdown
      placeholder={`${selectedItemTitles.length ? selectedItemTitles.join(', ') : placeholder}`}
  >
      {
        items.filter(({ id }) => (id !== '')).map(({ id, name }) => <div key={id} className={CM.item}>
          <Checkbox
            checked={selectedItems.includes(id)}
            data={id}
            onChange={handleItemChange}
          >{name}</Checkbox>
        </div>)
      }
  </Dropdown>
}

MultiSelect.propTypes = {
    placeholder: PropTypes.string,
    items: PropTypes.array,
    selectedItems: PropTypes.array,
    onChange: PropTypes.func
};

export default MultiSelect
