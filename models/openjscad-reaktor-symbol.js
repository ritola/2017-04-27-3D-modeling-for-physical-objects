function main(params) {
    return reaktorSymbol()
      .extrude({offset: [0,0,4]});
}

function reaktorSymbol() {
  var outer = new CSG.Path2D([[0,0]],false);
  outer = outer.appendBezier([[0,4.322797437399999],[-3.844995158120555,7.5138838527999985],[-8.010030283160422,7.5138838527999985]]);
  outer = outer.appendPoint([-8.79263242448957,7.5138838527999985]);
  outer = outer.appendPoint([-8.79263242448957,4.179710782]);
  outer = outer.appendPoint([-15.477629511277707,4.179710782]);
  outer = outer.appendPoint([-15.477629511277707,-16.486009812999995]);
  outer = outer.appendPoint([-10.933287758777912,-16.486009812999995]);
  outer = outer.appendPoint([-10.933287758777912,-9.047479287599996]);
  outer = outer.appendPoint([-8.09356805230338,-9.047479287599996]);
  outer = outer.appendPoint([-3.697110728962072,-16.474156480599998]);
  outer = outer.appendPoint([1.7142176005889789,-16.474156480599998]);
  outer = outer.appendPoint([-4.069361801595734,-6.6234728117999975]);
  outer = outer.appendBezier([[-1.6476131630290516,-5.429390683599999],[0,-3.3426397367999994],[0,0]]);
  var outerPlane = outer.close().innerToCAG();
  var inner = new CSG.Path2D([[-4.540955086183186,-0.2170288718]],false);
  inner = inner.appendBezier([[-4.540955086183186,-1.82033319],[-5.929206053798792,-3.2181797465999997],[-8.180492487762947,-3.2181797465999997]]);
  inner = inner.appendPoint([-8.79263242448957,-3.2181797465999997]);
  inner = inner.appendPoint([-8.79263242448957,-4.9086907245999996]);
  inner = inner.appendPoint([-10.933287758777913,-4.9086907245999996]);
  inner = inner.appendPoint([-10.933287758777913,-0.33556219579999996]);
  inner = inner.appendPoint([-8.79263242448957,-0.33556219579999996]);
  inner = inner.appendPoint([-8.79263242448957,2.7934353355999995]);
  inner = inner.appendPoint([-8.180492487762947,2.7934353355999995]);
  inner = inner.appendBezier([[-5.929206053798792,2.7934353355999995],[-4.540955086183186,1.3859932241999997],[-4.540955086183186,-0.21702887180000002]]);
  var innerPlane = inner.close().innerToCAG();
  return outerPlane.subtract(innerPlane);
}
