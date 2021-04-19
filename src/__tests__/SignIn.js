import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../components/SignIn';


describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const login = jest.fn();
      const history = { push: jest.fn() };

      const {getByTestId} = render(<SignInContainer signIn={login} history={history}/>);


      fireEvent.changeText(getByTestId('username'), 'user');
      fireEvent.changeText(getByTestId('password'), 'pass');
      fireEvent.press(getByTestId('submit'));

    
      await waitFor(() => {
        expect(login).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenCalledTimes(1);

        expect(login).toHaveBeenCalledWith({username: 'user', password: 'pass'});
        expect(history.push).toHaveBeenCalledWith('/');
      });
    });
  });
});