/**
 * Splits a bill between friends.
 *
 * Amounts are integer cents, so no floating point money is involved.
 *
 * @param {number} totalCents what the bill comes to, in cents
 * @param {number} people how many people share it
 * @returns {number[]} what each person pays, in cents
 */
export function splitBill(totalCents, people) {
  if (!Number.isSafeInteger(totalCents) || totalCents < 0) {
    throw new RangeError('totalCents must be a non-negative safe integer');
  }
  if (!Number.isSafeInteger(people) || people < 1) {
    throw new RangeError('people must be a positive safe integer');
  }

  const share = Math.floor(totalCents / people);
  const remainingCents = totalCents % people;

  return Array.from({ length: people }, (_, index) =>
    share + (index < remainingCents ? 1 : 0),
  );
}
