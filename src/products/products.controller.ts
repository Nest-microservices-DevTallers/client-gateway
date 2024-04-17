import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() { }

  @Post()
  createProduct(@Body() body: any) {
    return `Crea un producto`
  }

  @Get()
  findAllProducts() {
    return `Todos los productos`
  }

  @Get(':id')
  findOneProduct(@Param('id', ParseIntPipe) id: string) {
    return `Producto con id ${id}`
  }

  @Patch(':id')
  updateProduct(@Param('id', ParseIntPipe) id: string, @Body() body: any) {
    return `Actualiza producto con id ${id}`
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: string) {
    return `Elimina producto con id ${id}`
  }
}
