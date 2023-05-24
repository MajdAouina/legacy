import { Request, Response } from 'express';
import { getConnection, Repository } from 'typeorm';
import { CartItem } from '../entity/CartItem';

export async function addItemToCart(req: Request, res: Response): Promise<void> {
  try {
    const { customerId, productId, quantity, orderDate, address, city, postalCode } = req.body;

    const cartItemRepository: Repository<CartItem> = getConnection().getRepository(CartItem);

    const cartItem = new CartItem();
    cartItem.customerId = customerId;
    cartItem.productId = productId;
    cartItem.quantity = quantity;
    cartItem.orderDate = orderDate;
    cartItem.address = address;
    cartItem.city = city;
    cartItem.postalCode = postalCode;

    await cartItemRepository.save(cartItem);

    res.status(200).json({ message: 'Item added to cart successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart.' });
  }
}
