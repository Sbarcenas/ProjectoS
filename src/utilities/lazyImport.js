import React from "react";

export function lazyImport(_import, component = "default") {
	return React.lazy(() => _import.then(module => ({default: module[component]})));
}
