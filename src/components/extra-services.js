import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ExtraServices() {
  const [state, setState] = React.useState({})
  const { t, i18n } = useTranslation()

  function toggleBlockOpen(val) {
    val === state[val]
      ? setState({
          [val]: false,
        })
      : setState({
          [val]: val,
        })
  }

  return (
    <div className="extraservices page">
      <div className="wrapper">
        <div className="extraservices-content page-content">
          <div className="extraservices-content-description page-content-description">
            <h3 className="page-content-description__title">
              {t('extraServices.title')}
            </h3>
            <p className="page-content-description__text">
              {t('extraServices.text')}
            </p>
          </div>

          <div className="extraservices-content-blocks page-content-blocks">
            {t('extraServices').blocks.map((group, groupIndex) => (
              <div className="page-content-blocks-group" key={groupIndex}>
                {group.map((block, blockIndex) => (
                  <div
                    key={blockIndex}
                    className={
                      state[`${groupIndex}${blockIndex}`]
                        ? 'page-content-blocks-block_open extraservices-content-blocks-block_open'
                        : 'page-content-blocks-block'
                    }
                  >
                    <header
                      className="page-content-blocks-block-header flex-between"
                      onClick={(e) =>
                        toggleBlockOpen(`${groupIndex}${blockIndex}`)
                      }
                    >
                      <p className="page-content-blocks-block-header__title">
                        {t('extraServices').blockNames[groupIndex][blockIndex]}
                      </p>

                      {state[`${groupIndex}${blockIndex}`] ? (
                        <span className="page-content-blocks-block-header__close"></span>
                      ) : (
                        <span className="page-content-blocks-block-header__open"></span>
                      )}
                    </header>

                    <div className="page-content-blocks-block-content">
                      <ul className="page-content-blocks-block-content-list">
                        {block.map((listItem, listItemIndex) => (
                          <li
                            key={listItemIndex}
                            className="page-content-blocks-block-content-list__item"
                          >
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
