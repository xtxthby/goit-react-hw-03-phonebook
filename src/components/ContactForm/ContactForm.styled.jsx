import styled from '@emotion/styled';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  padding: 4px;
  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
  width: 500px;
  color: #063a36;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const FieldFormik = styled(Field)`
  padding: 4px 8px;
  max-width: 100%;
  border: 0;
  outline: 0;
  border-radius: 8px;
  color: #fff;
  background-color: #7ca78c;
  font-style: italic;
  font-size: 14px;
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 500px;
  font-style: italic;
  color: #9e0202;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 8px;

  max-width: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: #7ca78c;
  color: #fff;
  cursor: pointer;

`;
