import styles from './Typography.module.scss';
import { COLORS } from 'utils/colors';

const sizes = {
  display: {
    h1: '3.5rem',
    h2: '3.75rem',
    h3: '3rem',
    h4: '2.25rem',
    h5: '1.875rem',
    h6: '1.5rem',
  },
  text: {
    p: '1rem',
    span: '1rem',
    xl: '1.25rem',
    lg: '1.125rem',
    md: '1rem',
    sm: '0.875rem',
    xs: '0.75rem',
  },
  'line-spacing': {
    h1: '3.625rem',
  },
};

function Typography(props) {
  const {
    type = 'text',
    variant = 'p',
    size,
    children,
    fontFamily = "'Inter', sans-serif",
    fontWeight = 'normal',
    color = 'inherit',
    className,
    textAlign = 'inherit',
  } = props;

  const resolvedSize =
    size || type === 'display' ? sizes.display[variant] : sizes.text[variant];
  const resolvedColor = color === 'inherit' ? 'inherit' : COLORS[color];

  const classList = [
    styles.typography,
    // styles[variant || ''],
    styles[`${type}-${variant}`],
    size && styles[`text-size-${size}`], // this dynamically assigns the size class
    styles[`text-${textAlign}`],
    styles[`weight-${fontWeight}`],
    className,
  ].join(' ');

  const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];
  const Component = allowedTags.includes(variant) ? variant : 'span';

  if (props.dangerouslySetInnerHTML) {
    return (
      <Component
        className={classList}
        style={{ color: resolvedColor }}
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      />
    );
  }

  return (
    <Component className={classList} style={{ color: resolvedColor }}>
      {children}
    </Component>
  );
}

export default Typography;
