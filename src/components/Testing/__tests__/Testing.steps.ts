import Testing from '../index'
import { render, screen } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
const feature = loadFeature('./src/components/Testing/__tests__/Testing.feature');

defineFeature(feature, test => {
  test('Entering a correct password', ({ given, when, then }) => {
    given('I have previously created a password', () => {
    });

    when('I enter my password correctly', () => {
    });

    then('I should be granted access', () => {
    });

  });
});



