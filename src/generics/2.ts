type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }
  
  function compare<Top extends Pick<AllType, 'name' | 'color'>, Bottom extends Pick<AllType, 'position' |'weight'>> (
    top:Top,  
    bottom: Bottom): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }

