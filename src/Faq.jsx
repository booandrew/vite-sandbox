import { parseLinksAndBoldText } from './parseLinksAndBoldText';
import { FAQ_ITEMS, PRICING_PLANS_FEATURES } from './consts';
import { PlanCategory, PLAN_FEATURE_ICONS } from './service-consts';
import CollapsePanel from './CollapsePanel';

const HEAD_STYLE = {
  background: '-webkit-linear-gradient(45deg, #ccffcc, #99ff99)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginTop: 100,
  textAlign: 'center',
};

const CONTAINER_STYLE = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 30,
};

const COLLAPSE_ITEM_STYLE = {
  borderBottom: '1px solid grey',
  maxWidth: 500,
};

const COLLAPSE_CONTENT_STYLE = {
  textAlign: 'center',
  width: '90%',
  boxSizing: 'border-box',
  marginBottom: 30,
};

export const Faq = () => {
  return (
    <>
      <h1 style={HEAD_STYLE}>Frequently asked questions</h1>
      <div style={CONTAINER_STYLE}>
        {FAQ_ITEMS.map((faqItem) => {
          return (
            <div style={COLLAPSE_ITEM_STYLE} key={faqItem.answer}>
              <CollapsePanel title={faqItem.question}>
                <div style={COLLAPSE_CONTENT_STYLE}>
                  <div style={{ whiteSpace: 'pre-line', textAlign: 'start' }}>
                    {parseLinksAndBoldText(faqItem.answer)}
                  </div>
                </div>
              </CollapsePanel>
            </div>
          );
        })}
      </div>
    </>
  );
};
