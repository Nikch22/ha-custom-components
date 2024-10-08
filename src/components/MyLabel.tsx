import './mylabel.css';


export interface Props {
  /**
   * Display a text as label
   */
  label: string,
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'; 
  /**
   * Capitalize the all the characters
   */
  allCaps?: boolean; 
  /**
   * Select one of the pre-set color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Set a custom color
   */ 
  fontColor?: string; 
  /**
   * Set a custom color
   */ 
  backgroundColor?: string; 
}


export const MyLabel = ( { 
  label, 
  size = 'normal', 
  allCaps = false, 
  color = 'text-primary', 
  fontColor,
  backgroundColor = 'transparent'
}:Props ) => {
  return (
    <span className={ `${size} ${ color } label` } style={ { color: fontColor, backgroundColor }}>
      {allCaps? label.toUpperCase():label}
    </span>
  )
}
