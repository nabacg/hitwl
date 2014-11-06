// Compiled by ClojureScript 0.0-2311
goog.provide('json_html.core');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.string');
goog.require('clojure.string');
json_html.core.escape_html = (function escape_html(s){return clojure.string.escape.call(null,s,new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;",">","&gt;","<","&lt;","\"","&quot;"], null));
});
json_html.core.render_collection = (function render_collection(col){if(cljs.core.empty_QMARK_.call(null,col))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-collection","span.jh-empty-collection",-107581393)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__3777__auto__ = (function iter__7290(s__7291){return (new cljs.core.LazySeq(null,(function (){var s__7291__$1 = s__7291;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7291__$1);if(temp__4126__auto__)
{var s__7291__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7291__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__7291__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__7293 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__7292 = (0);while(true){
if((i__7292 < size__3776__auto__))
{var vec__7296 = cljs.core._nth.call(null,c__3775__auto__,i__7292);var i = cljs.core.nth.call(null,vec__7296,(0),null);var v = cljs.core.nth.call(null,vec__7296,(1),null);cljs.core.chunk_append.call(null,b__7293,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null));
{
var G__7298 = (i__7292 + (1));
i__7292 = G__7298;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7293),iter__7290.call(null,cljs.core.chunk_rest.call(null,s__7291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7293),null);
}
} else
{var vec__7297 = cljs.core.first.call(null,s__7291__$2);var i = cljs.core.nth.call(null,vec__7297,(0),null);var v = cljs.core.nth.call(null,vec__7297,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-array-key","th.jh-key.jh-array-key",-1623829832),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-array-value","td.jh-value.jh-array-value",1645079212),json_html.core.render.call(null,v)], null)], null),iter__7290.call(null,cljs.core.rest.call(null,s__7291__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,col));
})()], null)], null);
}
});
json_html.core.render_set = (function render_set(s){if(cljs.core.empty_QMARK_.call(null,s))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-set","div.jh-type-set",-367189823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-set","span.jh-empty-set",-1364654969)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__3777__auto__ = (function iter__7303(s__7304){return (new cljs.core.LazySeq(null,(function (){var s__7304__$1 = s__7304;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7304__$1);if(temp__4126__auto__)
{var s__7304__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7304__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__7304__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__7306 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__7305 = (0);while(true){
if((i__7305 < size__3776__auto__))
{var item = cljs.core._nth.call(null,c__3775__auto__,i__7305);cljs.core.chunk_append.call(null,b__7306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null));
{
var G__7307 = (i__7305 + (1));
i__7305 = G__7307;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7306),iter__7303.call(null,cljs.core.chunk_rest.call(null,s__7304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7306),null);
}
} else
{var item = cljs.core.first.call(null,s__7304__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.jh-value","li.jh-value",-344939266),json_html.core.render.call(null,item)], null),iter__7303.call(null,cljs.core.rest.call(null,s__7304__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,s);
})()], null);
}
});
json_html.core.render_map = (function render_map(m){if(cljs.core.empty_QMARK_.call(null,m))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jh-type-object","div.jh-type-object",1704701538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-map","span.jh-empty-map",-2061532971)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.jh-type-object","table.jh-type-object",-163995322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__3777__auto__ = (function iter__7316(s__7317){return (new cljs.core.LazySeq(null,(function (){var s__7317__$1 = s__7317;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7317__$1);if(temp__4126__auto__)
{var s__7317__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7317__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__7317__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__7319 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__7318 = (0);while(true){
if((i__7318 < size__3776__auto__))
{var vec__7322 = cljs.core._nth.call(null,c__3775__auto__,i__7318);var k = cljs.core.nth.call(null,vec__7322,(0),null);var v = cljs.core.nth.call(null,vec__7322,(1),null);cljs.core.chunk_append.call(null,b__7319,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),cljs.core.name.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null));
{
var G__7324 = (i__7318 + (1));
i__7318 = G__7324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7319),iter__7316.call(null,cljs.core.chunk_rest.call(null,s__7317__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7319),null);
}
} else
{var vec__7323 = cljs.core.first.call(null,s__7317__$2);var k = cljs.core.nth.call(null,vec__7323,(0),null);var v = cljs.core.nth.call(null,vec__7323,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.jh-key.jh-object-key","th.jh-key.jh-object-key",1382268279),cljs.core.name.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.jh-value.jh-object-value","td.jh-value.jh-object-value",-2080818691),json_html.core.render.call(null,v)], null)], null),iter__7316.call(null,cljs.core.rest.call(null,s__7317__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,m);
})()], null)], null);
}
});
json_html.core.render_string = (function render_string(s){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-empty-string","span.jh-empty-string",1227187446)], null):json_html.core.escape_html.call(null,s))], null);
});
json_html.core.render = (function render(v){var t = cljs.core.type.call(null,v);if(cljs.core._EQ_.call(null,t,cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),cljs.core.name.call(null,v)], null);
} else
{if(cljs.core._EQ_.call(null,t,String))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-string","span.jh-type-string",-94106783),json_html.core.escape_html.call(null,v)], null);
} else
{if(cljs.core._EQ_.call(null,t,Date))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-date","span.jh-type-date",-1243309956),v.toString()], null);
} else
{if(cljs.core._EQ_.call(null,t,Boolean))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-bool","span.jh-type-bool",53751640),v], null);
} else
{if(cljs.core._EQ_.call(null,t,Number))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.jh-type-number","span.jh-type-number",1495617844),v], null);
} else
{if((function (){var G__7328 = v;if(G__7328)
{var bit__3702__auto__ = (G__7328.cljs$lang$protocol_mask$partition0$ & (1024));if((bit__3702__auto__) || (G__7328.cljs$core$IMap$))
{return true;
} else
{if((!G__7328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__7328);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__7328);
}
})())
{return json_html.core.render_map.call(null,v);
} else
{if((function (){var G__7329 = v;if(G__7329)
{var bit__3702__auto__ = (G__7329.cljs$lang$protocol_mask$partition0$ & (4096));if((bit__3702__auto__) || (G__7329.cljs$core$ISet$))
{return true;
} else
{if((!G__7329.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__7329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__7329);
}
})())
{return json_html.core.render_set.call(null,v);
} else
{if((function (){var G__7330 = v;if(G__7330)
{var bit__3702__auto__ = (G__7330.cljs$lang$protocol_mask$partition0$ & (8));if((bit__3702__auto__) || (G__7330.cljs$core$ICollection$))
{return true;
} else
{if((!G__7330.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__7330);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__7330);
}
})())
{return json_html.core.render_collection.call(null,v);
} else
{return null;

}
}
}
}
}
}
}
}
});
json_html.core.edn__GT_hiccup = (function edn__GT_hiccup(edn){return json_html.core.render.call(null,edn);
});
json_html.core.edn__GT_html = (function edn__GT_html(edn){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,json_html.core.edn__GT_hiccup.call(null,edn))));
});
json_html.core.json__GT_hiccup = (function json__GT_hiccup(json){return json_html.core.render.call(null,cljs.core.js__GT_clj.call(null,json));
});
json_html.core.json__GT_html = (function json__GT_html(json){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,json_html.core.json__GT_hiccup.call(null,json))));
});

//# sourceMappingURL=core.js.map