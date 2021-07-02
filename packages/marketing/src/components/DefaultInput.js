import React, { Children } from 'react';
 
import {
  CircularProgress,
  IconButton,
  TextField
} from '@material-ui/core';
import { WarningOutlined, Block, Send, ExpandMore } from '@material-ui/icons';
 
/**
 * Component to display input
 *
 * @param {
 *  error<boolean>: if has error,
 *  helperText<string>: text displayed when has error,
 *  type<string>: input type,
 *  name<string>: input name,
 * }
 */
 
// interface DefaultInputProps {
//   error?: boolean;
//   helperText?: string;
//   type?: string;
//   name: string;
//   disabled?: boolean;
//   value?: any;
//   onChange?: any;
//   actionButton?: boolean;
//   handleEnterButton?: any;
//   select?: boolean;
//   loading?: boolean;
//   SelectProps?: any;
// }
 
// const DefaultInput: React.FC<DefaultInputProps> = (props): JSX.Element => {
const DefaultInput = (props) => {
  const {
    error = false,
    helperText = '',
    type = '',
    name,
    disabled = false,
    value = undefined,
    onChange,
    actionButton = false,
    handleEnterButton,
    select = false,
    loading = false,
    children,
    SelectProps
  } = props;
 
  const warningIcon = () => {
    return error ? <WarningOutlined style={{ color: '#868686' }} /> : '';
  };
 
  const SendIcon = () => {
    return (
      <IconButton onClick={handleEnterButton}>
        <Send />
      </IconButton>
    );
  };
 
  const hasIcon = () => {
    if (actionButton || error || loading || disabled) {
      return true;
    }
    return false;
  };
 
  return (
    <TextField
      {...props}
      variant="outlined"
      size="medium"
      name={name}
      fullWidth
      type={type}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
      disabled={disabled}
      select={select}
      SelectProps={{
        style: {
          backgroundColor: 'white'
        },
        IconComponent: ExpandMore,
        ...SelectProps
      }}
      InputProps={{
        endAdornment: (
          <IconButton style={{ display: !hasIcon() ? 'none' : 'unset' }}>
            {loading && (
              <CircularProgress
                style={{ color: '#0085CA', marginRight: 5 }}
                size={25}
              />
            )}
            {disabled ? <Block /> : actionButton ? <SendIcon /> : warningIcon()}
          </IconButton>
        )
      }}
    >
      {children}
    </TextField>
  );
};
 
export default DefaultInput;
