/**
 * Test file for add.js
 * Tests the addition function with various inputs
 * Based on Phase 1 test cases: Add TC-01 through TC-05
 */

import add from '../src/add.js';

describe('add function', () => {

  // Add TC-01: Verify the addition of two positive numbers
  test('should add two positive numbers correctly', () => {
    const result = add(6, 4);
    expect(result).toBe(10);
  });

  // Add TC-02: Verify the addition of one positive and one negative number
  test('should add positive and negative numbers correctly', () => {
    const result = add(6, -4);
    expect(result).toBe(2);
  });

  // Add TC-03: Verify addition of two decimal numbers
  test('should add two decimal numbers correctly', () => {
    const result = add(6.5, 4.2);
    // Using toBeCloseTo for floating point comparison (due to precision)
    expect(result).toBeCloseTo(10.7);
  });

  // Add TC-04: Verify addition of two negative numbers
  test('should add two negative numbers correctly', () => {
    const result = add(-3.2, -6.4);
    // Using toBeCloseTo for floating point comparison
    expect(result).toBeCloseTo(-9.6);
  });

  // Add TC-05: Verify behaviour with one null parameter
  test('should handle null as 0', () => {
    const result = add(9, null);
    expect(result).toBe(9);
  });

  // Additional edge cases
  test('should add zero to a number', () => {
    const result = add(5, 0);
    expect(result).toBe(5);
  });

  test('should return 0 when adding 0 + 0', () => {
    const result = add(0, 0);
    expect(result).toBe(0);
  });

  test('should handle very large numbers', () => {
    const result = add(1000000, 2000000);
    expect(result).toBe(3000000);
  });

});
