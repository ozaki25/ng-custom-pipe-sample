import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mask' })
export class MaskPipe implements PipeTransform {
  transform(value: string, size?: number): string {
    const _size = size || 4;
    return `${value.slice(0, -_size)}${'*'.repeat(_size)}`;
  }
}
